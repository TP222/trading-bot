import { Candle } from "./types/types";
import { Data, Signal } from "./types/types";
import getMovingAverage from "./utils/getMovingAverage";

export default function crossoverSignal(
  data: Data,
  shortTerm: number,
  longTerm: number,
  index?: number
): Signal {
  interface CandleWithAverages extends Candle {
    shortTermMA: number;
    longTermMA: number;
  }
  const newData: CandleWithAverages[] = [];
  data.forEach((candle, index, array) => {
    const shortTermMA = getMovingAverage(shortTerm, index, array);
    const longTermMA = getMovingAverage(longTerm, index, array);
    const candleWithAverages = {
      ...candle,
      shortTermMA,
      longTermMA,
    };
    newData.push(candleWithAverages);
  });

  if (index) {
    if (index < data.length) {
      const signal =
        newData[index].shortTermMA > newData[index].longTermMA ? "buy" : "sell";
      return signal;
    } else {
      throw Error(`Maximum index is ${data.length - 1} at crossoverStrategy()`);
    }
  } else {
    const signal =
      newData[newData.length - 1].shortTermMA >
      newData[newData.length - 1].longTermMA
        ? "buy"
        : "sell";
    return signal;
  }
}
