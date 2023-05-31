import meanReversionStrategy from "../strategies/meanReversionStrategy";

export interface Candle {
  timestamp: EpochTimeStamp;
  open: number;
  high: number;
  low: number;
  close: number;
}

export type Data = Candle[];

export type Signal = "buy" | "sell";

export type Strategy = typeof meanReversionStrategy;
