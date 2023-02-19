import { theme } from "@configs";
import Highcharts from "highcharts/highstock";
import { formatToUSD } from "./format";

const generateChart = (seriesName: string, data: number[][]) => {
  const ohlc = [];
  const volume = [];

  for (let i = 0; i < data.length; i++) {
    ohlc.push([
      data[i][0], // date
      parseFloat(data[i][1].toFixed(2)), // open
      parseFloat(data[i][2].toFixed(2)), // high
      parseFloat(data[i][3].toFixed(2)), // low
      parseFloat(data[i][4].toFixed(2)), // close
    ]);

    volume.push([
      data[i][0], // date
      parseInt(data[i][5].toFixed(2)), // volume
    ]);
  }

  Highcharts.stockChart("chart", {
    legend: {
      enabled: true,
    },
    yAxis: [
      {
        height: "75%",
        title: {
          text: "",
        },
      },
      {
        top: "80%",
        height: "20%",
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "",
    },
    rangeSelector: {
      selected: 2,
    },
    plotOptions: {
      series: {
        showInLegend: true,
        accessibility: {
          exposeAsGroupOnly: true,
        },
      },
    },
    tooltip: {
      useHTML: true,
    },
    series: [
      {
        type: "hollowcandlestick",
        name: seriesName.toLocaleUpperCase(),
        data: ohlc,
        tooltip: {
          pointFormatter: function () {
            return `<div>
            <strong style="display:block; margin-bottom: 3px;">${seriesName.toLocaleUpperCase()}</strong>
            <div>Open: <strong>${formatToUSD((this as any).open)}</strong></div>
            <div>High: <strong>${formatToUSD((this as any).high)}</strong></div>
            <div>Low: <strong>${formatToUSD((this as any).low)}</strong></div>
            <div>Close: <strong>${formatToUSD(
              (this as any).close
            )}</strong></div>
            </div>`;
          },
        },
      },
      {
        type: "column",
        id: "volume",
        name: "Volume",
        color: theme.colors.gray500.toString(),
        data: volume,
        yAxis: 1,
        tooltip: {
          pointFormatter: function () {
            return `Volume: <strong>${formatToUSD(this.y)}</strong>`;
          },
        },
      },
    ],
  });

  // clean up the chart. Note we wouldn't want to remove credits in a production env :)
  document.querySelector(".highcharts-credits")?.remove();
};

export { generateChart, Highcharts };
