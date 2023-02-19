import { useCallback, useEffect, useState } from "react";
import useSwr from "swr";
import debounce from "lodash.debounce";
import { format, subDays, subYears } from "date-fns";
import { Cross1Icon } from "@radix-ui/react-icons";

import HollowCandlestickModule from "highcharts/modules/hollowcandlestick";
import ExportingModule from "highcharts/modules/Exporting";
import DataModule from "highcharts/modules/data";
import NoDataModule from "highcharts/modules/no-data-to-display";
import AccessibilityModule from "highcharts/modules/accessibility";

import {
  Button,
  Flex,
  Input,
  Loader,
  PageHead,
  Select,
  Table,
  Text,
} from "@components";
import { messariAPI } from "@shared";
import {
  formatNumber,
  formatPercentage,
  formatToUSD,
  generateChart,
  Highcharts,
  shouldAddDecimals,
} from "@utils";
import { SelectProps } from "components/Select";
import { MessariGetAllAssetsAPIResponse } from "./api/messari/getAllAssets";
import { theme } from "@configs";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const messariV1 = messariAPI("v1");
  const [alertMessage, setAlertMessage] = useState("");
  const [assetOptions, setAssetOptions] = useState<SelectProps["options"]>([]);
  const [firstRender, setFirstRender] = useState(false);
  const [pollID, setPollID] = useState<NodeJS.Timeout>();

  const {
    data: allAssetsData,
    error: allAssetsError,
    isLoading: initDataIsLoading,
  } = useSwr<MessariGetAllAssetsAPIResponse>(
    `/api/messari/getAllAssets`,
    fetcher
  );

  const initSelectedAsset =
    (allAssetsData?.data &&
      Array.isArray(allAssetsData?.data) &&
      allAssetsData?.data[0].symbol) ||
    "BTC"; // default to BTC

  const [selectedAsset, setSelectedAsset] = useState(initSelectedAsset);
  const [selectedAssetMetrics, setSelectedAssetMetrics] = useState<{
    name: string;
    id: string;
    market_data: {
      price_usd: number;
      percent_change_usd_last_24_hours: number;
      volume_last_24_hours: number;
      ohlcv_last_24_hour: {
        high: number;
        low: number;
      };
    };
    marketcap: {
      marketcap_dominance_percent: number;
      rank: number;
      current_marketcap_usd: number;
    };
    supply: {
      circulating: number;
    };
  } | null>(null);
  const [showAlert, setShowAlert] = useState(
    allAssetsError || allAssetsData?.error
  );

  const formatAssetData = (data: MessariGetAllAssetsAPIResponse["data"]) => {
    return (
      data?.map(({ id, name, symbol }) => ({
        label: name,
        labelComponent: (
          <Flex direction="column">
            <Text className="text">{name}</Text>
            <Text size="label" bold color="mediumGray" className="text">
              {symbol}
            </Text>
          </Flex>
        ),
        value: symbol,
        image: `https://asset-images.messari.io/images/${id}/32.png?v=2`,
      })) || []
    );
  };

  const clearAlert = useCallback(() => {
    if (showAlert) {
      setShowAlert(false);
      setAlertMessage("");
    }
  }, [showAlert]);

  const resetSelect = useCallback(() => {
    clearAlert();
    setAssetOptions(formatAssetData(allAssetsData?.data || []));
    setSelectedAsset(initSelectedAsset);
  }, [allAssetsData?.data, clearAlert, initSelectedAsset]);

  const getAssetTimeSeries = useCallback(
    async (asset: string) => {
      const currentDateFormatted = format(new Date(), "yyyy-MM-dd");

      // API caps returned data at ~ 5.5years
      const previousYearDateFormatted = format(
        subYears(subDays(new Date(), 1), 5),
        "yyyy-MM-dd"
      );

      // We're limited by interval on the API but we'll want to include other intervals i.e 1m, 5m
      const response = await messariV1.get(
        `assets/${asset}/metrics/price/time-series?start=${previousYearDateFormatted}&end=${currentDateFormatted}&interval=1d`
      );
      const dataObj = await response?.json();

      if (dataObj?.data && dataObj?.data?.values) {
        generateChart(asset, dataObj.data.values);
        return;
      }

      generateChart(asset, []);

      if (dataObj?.data && !dataObj?.data?.values) {
        setAlertMessage(
          `Sorry, there is no available time-series data for '${asset}'.`
        );
      } else {
        setAlertMessage(
          `There was an issue retrieving time-series data for '${asset}'. Please try again.`
        );
      }
      setShowAlert(true);
    },
    [messariV1]
  );

  const getAssetMetrics = useCallback(
    async (asset: string) => {
      const response = await messariV1.get(`assets/${asset}/metrics`);
      const dataObj = await response?.json();

      if (dataObj && dataObj.data) {
        setSelectedAssetMetrics(dataObj.data);
        return true;
      } else {
        setAlertMessage(
          `There was an issue retrieving metrics data for '${asset}'. Please try again.`
        );
        setShowAlert(true);
        setSelectedAssetMetrics(null);
        return false;
      }
    },
    [messariV1]
  );

  const loadAssetData = useCallback(
    async (asset: string) => {
      getAssetTimeSeries(asset);
      const canPollMetrics = await getAssetMetrics(asset);

      if (pollID) {
        clearInterval(pollID);
      }

      // Poll for new data hack, websocket or graphql long polling would be ideal
      if (!showAlert && canPollMetrics) {
        setPollID(
          setInterval(() => {
            getAssetMetrics(asset);
          }, 3000)
        );
      }
    },
    [getAssetMetrics, getAssetTimeSeries, pollID, showAlert]
  );

  useEffect(() => {
    // Init Chart Config
    HollowCandlestickModule(Highcharts);
    ExportingModule(Highcharts);
    DataModule(Highcharts);
    NoDataModule(Highcharts);
    AccessibilityModule(Highcharts);
  }, []);

  useEffect(() => {
    setAssetOptions(formatAssetData(allAssetsData?.data || []));
  }, [allAssetsData?.data]);

  useEffect(() => {
    if (!initDataIsLoading && !firstRender) {
      loadAssetData(selectedAsset);

      setFirstRender(true);
    }
  }, [
    firstRender,
    getAssetMetrics,
    initDataIsLoading,
    loadAssetData,
    selectedAsset,
  ]);

  const queryAsset = useCallback(
    async (query: string) => {
      const response = await messariV1.get(`assets/${query}`);
      const dataObj = await response?.json();
      if (dataObj?.data) {
        setAssetOptions(formatAssetData([dataObj.data]));
        setSelectedAsset(dataObj.data.symbol);
      } else {
        resetSelect();
      }
    },
    [messariV1, resetSelect]
  );

  const debouncedSearch = useCallback(
    () =>
      debounce(async (query: string) => {
        queryAsset(query);
      }, 300),
    [queryAsset]
  );

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    clearAlert();

    if (!e.currentTarget.value) {
      // hack to ensure empty strings always reset select
      setTimeout(() => {
        resetSelect();
        loadAssetData(initSelectedAsset);
      }, 400);
    } else {
      const query = e.currentTarget.value;
      debouncedSearch()(query);
      loadAssetData(query);
    }
  };

  const renderMetrics = () => {
    if (!selectedAssetMetrics) return;

    const name = selectedAssetMetrics?.name;
    const id = selectedAssetMetrics?.id;
    const marketData = selectedAssetMetrics?.market_data;
    const marketCap = selectedAssetMetrics?.marketcap;
    const supply = selectedAssetMetrics?.supply;
    const usdPrice = marketData?.price_usd;
    const usd24hrPriceChange = marketData?.percent_change_usd_last_24_hours;
    const ohlcv24hr = marketData?.ohlcv_last_24_hour;
    const priceChange24hr = (usdPrice * usd24hrPriceChange) / 100;

    return (
      <Flex
        my="base"
        padding="base"
        bgColor="lightGray"
        radius="small"
        direction="column"
        gap="base"
        fullWidth={{ "@xlDown": true }}
        css={{
          minWidth: 360,
        }}
      >
        <Text as="h2" size="h3">
          {name} Metrics
        </Text>

        <Table
          columns={[`${name} Price Today`]}
          data={[
            {
              id: `${id}-price`,
              label: "Price",
              price: formatToUSD(usdPrice, shouldAddDecimals(usdPrice)),
              bold: ["price"],
            },
            {
              id: `${id}-price-change-24hr`,
              label: "Price Change 24hr",
              priceChange24hr: `${formatToUSD(
                priceChange24hr,
                shouldAddDecimals(Math.abs(priceChange24hr))
              )} (${formatPercentage(usd24hrPriceChange)})`,
              bold: ["priceChange24hr"],
              color: {
                keys: ["priceChange24hr"],
                value:
                  priceChange24hr > 0
                    ? theme.colors.green400.toString()
                    : priceChange24hr < 0
                    ? theme.colors.red400.toString()
                    : theme.colors.secondary.toString(),
              },
            },
            {
              id: `${id}-24hr-low-high`,
              label: "24h Low / 24h High",
              lowHigh24hr: `${formatToUSD(
                ohlcv24hr?.low,
                shouldAddDecimals(ohlcv24hr?.low)
              )} / ${formatToUSD(
                ohlcv24hr?.high,
                shouldAddDecimals(ohlcv24hr?.high)
              )}`,
              bold: ["lowHigh24hr"],
            },
            {
              id: `${id}-24hr-volume`,
              label: "24h Trading Volume",
              volume24hr: formatToUSD(marketData?.volume_last_24_hours),
              bold: ["volume24hr"],
            },
            {
              id: `${id}-market-dominance-percent`,
              label: "Market Dominance",
              marketDominancePercent: formatPercentage(
                marketCap?.marketcap_dominance_percent
              ),
              bold: ["marketDominancePercent"],
            },
            {
              id: `${id}-market-rank`,
              label: "Market Rank",
              marketRank: marketCap?.rank ? `#${marketCap?.rank}` : "N/A",
              bold: ["marketRank"],
            },
          ]}
        />

        <Table
          columns={[`${name} Market Cap`]}
          data={[
            {
              id: `${id}-market-cap`,
              label: "Market Cap",
              marketCap: formatToUSD(marketCap.current_marketcap_usd),
              bold: ["marketCap"],
            },
          ]}
        />

        <Table
          columns={[`${name} Supply`]}
          data={[
            {
              id: `${id}-supply`,
              label: "Circulating Supply",
              circulatingSupply: formatNumber(supply.circulating),
              bold: ["circulatingSupply"],
            },
          ]}
        />
      </Flex>
    );
  };

  return (
    <>
      <PageHead title="Dashboard" />

      <Flex
        fullHeight
        container
        direction="column"
        justify={initDataIsLoading ? "center" : "start"}
        align={initDataIsLoading ? "center" : "start"}
      >
        {initDataIsLoading ? (
          <Loader size="large" />
        ) : (
          <>
            <Flex
              gap="small"
              direction={{ "@xSmDown": "column" }}
              fullWidth
              mb="large"
            >
              <Input
                type="text"
                area="medium"
                placeholder="Search for an asset"
                onKeyUp={handleSearch}
              />

              <Select
                value={selectedAsset}
                onChange={(value) => {
                  setSelectedAsset(value);
                  loadAssetData(value);
                }}
                placeHolder="Select an asset"
                options={assetOptions}
              />
            </Flex>

            {showAlert && (
              <Flex
                justify="center"
                align="center"
                padding="small"
                gap="xSmall"
                mb="small"
                radius="small"
                css={{
                  background: "hsla(10, 50%, 50%, .10)",
                }}
              >
                ❗️
                <Text>
                  {allAssetsError || allAssetsData?.error || alertMessage}
                </Text>
                <Button
                  bgColor="none"
                  css={{ padding: 0 }}
                  asProps={{
                    onClick: () => {
                      setShowAlert(false);
                      setAlertMessage("");
                    },
                  }}
                >
                  <Cross1Icon />
                </Button>
              </Flex>
            )}

            <Flex fullWidth direction={{ "@xlDown": "column" }}>
              <Flex asProps={{ id: "chart" }} fullWidth />
              {renderMetrics()}
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
}
