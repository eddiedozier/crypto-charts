import { HttpRequest } from "./http";

export const messariAPI = (apiVersion: string) =>
  new HttpRequest(`https://data.messari.io/api/${apiVersion}/`, {
    headers: {
      "content-type": "application/json",
      "x-messari-api-key": process.env.MESSARI_API_KEY || "",
    },
  });
