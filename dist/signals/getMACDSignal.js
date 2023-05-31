"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getExponentialMovingAverage_1 = __importDefault(require("../utils/getExponentialMovingAverage"));
const getMovingAverage_1 = __importDefault(require("../utils/getMovingAverage"));
function getMACDSignal(index, data) {
    const sma = (0, getMovingAverage_1.default)(9, data.length - 1, data);
    const shortEma = (0, getExponentialMovingAverage_1.default)(12, data.length - 1, data);
    const longEma = (0, getExponentialMovingAverage_1.default)(26, data.length - 1, data);
    console.log(`SMA: ${sma.toFixed(2)}, SHORT-EMA: ${shortEma.toFixed(2)}, LONG_EMA: ${longEma.toFixed(2)}`);
    const signal = shortEma > longEma ? "buy" : "sell";
    return signal;
}
exports.default = getMACDSignal;
