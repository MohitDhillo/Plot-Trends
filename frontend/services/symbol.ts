import camelcaseKeys from "camelcase-keys";

import { type SymbolCryptoExchanges } from "@/lib/jotai/atoms";
import { createApiBaseWithAbortController } from "./base";
import {env} from "use-sidecar/dist/es2015/env";

type SymbolData = {
  id: number;
  name?: string;
  symbol: string;
  isCrypto: boolean;
};

type MultipleSymbolResponse = {
  otherSymbol: {
    name: string;
    symbol: string;
  };
  symbolUsed: {
    name: string;
    symbol: string;
  };
};

const getSymbols = async (
  abortController: AbortController,
  query: string,
  excludeCrypto: boolean
): Promise<SymbolData[]> => {
  const apiBase = await createApiBaseWithAbortController(abortController, process.env.base);
  return await apiBase
    .url(`/symbol/?query=${query}&exclude_crypto=${excludeCrypto}`)
    .get()
    .json((json: SymbolData[]) => json.map((x) => camelcaseKeys(x)));
};

const getCryptoExchanges = async (
  abortController: AbortController,
  symbol: string
): Promise<SymbolCryptoExchanges> => {
  const apiBase = await createApiBaseWithAbortController(abortController);
  return await apiBase
    .url(`/symbol/crypto-exchanges/?symbol=${symbol}`)
    .get()
    .json((json: SymbolCryptoExchanges) => json);
};

export { getSymbols, getCryptoExchanges };

export type { SymbolData };
