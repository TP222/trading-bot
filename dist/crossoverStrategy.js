"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMovingAverage_1 = __importDefault(require("./utils/getMovingAverage"));
function crossoverStrategy(data, shortTerm, longTerm, index) {
    const newData = [];
    data.forEach((candle, index, array) => {
        const shortTermMA = (0, getMovingAverage_1.default)(shortTerm, index, array);
        const longTermMA = (0, getMovingAverage_1.default)(longTerm, index, array);
        const candleWithAverages = {
            ...candle,
            shortTermMA,
            longTermMA,
        };
        newData.push(candleWithAverages);
    });
    if (index) {
        if (index < data.length) {
            const signal = newData[index].shortTermMA > newData[index].longTermMA ? "buy" : "sell";
            return signal;
        }
        else {
            throw Error(`Maximum index is ${data.length - 1} at crossoverStrategy()`);
        }
    }
    else {
        const signal = newData[newData.length - 1].shortTermMA >
            newData[newData.length - 1].longTermMA
            ? "buy"
            : "sell";
        return signal;
    }
}
exports.default = crossoverStrategy;
