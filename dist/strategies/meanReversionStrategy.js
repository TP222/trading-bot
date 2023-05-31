"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMACDSignal_1 = __importDefault(require("../signals/getMACDSignal"));
const getMovingAverage_1 = __importDefault(require("../utils/getMovingAverage"));
function meanReversionStrategy(data) {
    const lastCandleIndex = data.length - 1;
    const mode = (0, getMACDSignal_1.default)(lastCandleIndex, data);
    if (mode === "buy") {
        const sma = (0, getMovingAverage_1.default)(9, lastCandleIndex, data);
    }
    return mode;
}
exports.default = meanReversionStrategy;
