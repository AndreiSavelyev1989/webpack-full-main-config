import path from "path";
import { Configuration } from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import {
  BuildMode,
  BuildOptions,
  BuildPlatform,
} from "./config/build/types/types";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const options: BuildOptions = {
    mode: env.mode ?? "development",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "dist"),
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
      public: path.resolve(__dirname, "public"),
    },
    port: env.port ?? 3000,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? "desktop",
  };

  const config: Configuration = buildWebpack(options);

  return config;
};
