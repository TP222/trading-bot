"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function backtest(strategy, data) {
    const mode = strategy(data);
    console.log(`Current mode: ${mode}`);
}
exports.default = backtest;
