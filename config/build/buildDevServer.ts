import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
  return {
    port: port ?? 3000,
    open: true,
    //если раздавать статику через nginx, то нужно будет делать проксирование на index.html
    historyApiFallback: true,
    hot: true
  };
}
