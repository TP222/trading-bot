import backtest from "./backtest";
import meanReversionStrategy from "./strategies/meanReversionStrategy";
import { Data } from "./types/types";
import getHistoricalData from "./utils/getHistoricalData";

async function app() {
  const data = (await getHistoricalData(1)) as Data;
  backtest(meanReversionStrategy, data);
}

app();
