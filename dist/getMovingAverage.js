"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the average price, to be used in array iteration.
 * @param length Moving average period length, depending on time interval.
 * @returns Average price.
 */
function getMovingAverage(length, index, array) {
    if (length > index + 1 || length > array.length) {
        return 0;
    }
    let totalPrices = 0;
    for (let i = index; i <= index; i--) {
        totalPrices += array[i].close;
    }
    const average = totalPrices / length;
    console.log(`Average: ${average}`);
    return average;
}
exports.default = getMovingAverage;
