// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { messariAPI } from "@shared";
import type { NextApiRequest, NextApiResponse } from "next";

export type MessariGetAllAssetsAPIResponse = {
  error?: unknown;
  status?: number | unknown;
  data?: {
    id: string;
    serial_id: number;
    symbol: string;
    name: string;
    slug: string;
  }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MessariGetAllAssetsAPIResponse>
) {
  const messari = messariAPI("v2");

  try {
    const response = await messari.get("assets");
    const data = await response?.json();

    if (!response?.ok) {
      const status = response?.status;
      const error = response?.statusText;

      res.status(status || 500).json({ error, status });
      //NOTE: Add Logging Service Here
    } else {
      res.status(200).json(data);
    }
  } catch (error: unknown) {
    //NOTE: Add Logging Service Here
    res.status(500).json({ error });
  }
}
