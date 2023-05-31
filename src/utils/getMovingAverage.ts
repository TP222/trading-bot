import { Candle } from "../types/types";

/**
 * Get the average price, to be used in array iteration.
 * @param length Moving average period length, depending on time interval.
 * @returns Average price.
 */
export default function getMovingAverage(
  length: number,
  index: number,
  array: Candle[]
): number {
  if (length > index + 1 || length > array.length) {
    return 0;
  }
  let totalPrices = 0;
  for (let i = index; i > index - length && i >= 0; i--) {
    totalPrices += array[i].close;
  }
  const average = totalPrices / length;
  return average;
}
