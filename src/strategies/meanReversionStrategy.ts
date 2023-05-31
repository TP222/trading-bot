import getMACDSignal from "../signals/getMACDSignal";
import { Data } from "../types/types";
import getMovingAverage from "../utils/getMovingAverage";

export default function meanReversionStrategy(data: Data) {
  const lastCandleIndex = data.length - 1;
  const mode = getMACDSignal(lastCandleIndex ,data);
  if(mode === "buy"){
    const sma = getMovingAverage(9, lastCandleIndex, data);
  }
  return mode;
}
