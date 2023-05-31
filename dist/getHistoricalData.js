"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param days Data up to number of days ago (1/7/14/30/90/180/365/max)
 * @description
 * Candle's body:
 *  - 1 - 2 days: 30 minutes
 *  - 3 - 30 days: 4 hours
 *  - 31 days and beyond: 4 days
 * @returns Array of Candles
 */
async function getHistoricalData(days) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/ethereum/ohlc?vs_currency=usd&days=${days}`);
        const jsonResponse = await response.json();
        const candleObjectArray = [];
        for (const candleArray of jsonResponse) {
            const candleObject = {
                timestamp: candleArray[0],
                open: candleArray[1],
                high: candleArray[2],
                low: candleArray[3],
                close: candleArray[4],
            };
            candleObjectArray.push(candleObject);
        }
        console.log("Historical data fetched");
        return candleObjectArray;
    }
    catch (e) {
        console.log(e);
    }
}
exports.default = getHistoricalData;
