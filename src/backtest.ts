import { Data, Strategy } from "./types/types";

export default async function backtest(strategy: Strategy, data: Data) {
  const mode = strategy(data);
  console.log(`Current mode: ${mode}`);
}
