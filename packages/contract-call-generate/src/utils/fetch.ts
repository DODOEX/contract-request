import nodeFetch, { RequestInit } from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";

export const fetch: typeof nodeFetch = (url, init) => {
  let agent: RequestInit["agent"] = undefined;
  if (process.env.https_proxy) {
    agent = new HttpsProxyAgent(process.env.https_proxy); // replace with your proxy server
  }

  return nodeFetch(url, {
    agent,
    ...init,
  });
};
