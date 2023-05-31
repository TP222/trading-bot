import { Data } from "../types/types";
import getExponentialMovingAverage from "../utils/getExponentialMovingAverage";
import getMovingAverage from "../utils/getMovingAverage";

export default function getMACDSignal(index: number, data: Data) {
  const sma = getMovingAverage(9, data.length - 1, data);
  const shortEma = getExponentialMovingAverage(12, data.length - 1, data);
  const longEma = getExponentialMovingAverage(26, data.length - 1, data);
  console.log(
    `SMA: ${sma.toFixed(2)}, SHORT-EMA: ${shortEma.toFixed(
      2
    )}, LONG_EMA: ${longEma.toFixed(2)}`
  );
  const signal = shortEma > longEma ? "buy" : "sell";
  return signal;
}
