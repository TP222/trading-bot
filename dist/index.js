"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backtest_1 = __importDefault(require("./backtest"));
const meanReversionStrategy_1 = __importDefault(require("./strategies/meanReversionStrategy"));
const getHistoricalData_1 = __importDefault(require("./utils/getHistoricalData"));
async function app() {
    const data = (await (0, getHistoricalData_1.default)(1));
    (0, backtest_1.default)(meanReversionStrategy_1.default, data);
}
app();
