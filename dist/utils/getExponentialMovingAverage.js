"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the Exponential Moving Average (EMA) price, to be used in array iteration.
 * @param length Exponential moving average period length, depending on time interval.
 * @returns Exponential moving average price.
 */
function getExponentialMovingAverage(length, index, array) {
    if (length > index + 1 || length > array.length) {
        return 0;
    }
    const smoothingFactor = 2 / (length + 1);
    // Calculate the initial SMA as a starting point for the EMA calculation
    let initialSMA = 0;
    for (let i = 0; i < length; i++) {
        initialSMA += array[index - i].close;
    }
    initialSMA /= length;
    let ema = initialSMA;
    // Start the EMA calculation from the next data point
    for (let i = index - length - 1; i >= 0; i--) {
        ema = array[i].close * smoothingFactor + ema * (1 - smoothingFactor);
    }
    return ema;
}
exports.default = getExponentialMovingAverage;
