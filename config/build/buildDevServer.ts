import { BuildOptions } from "./types/types";

export function buildDevServer(option : BuildOptions){
    return ({
            port: option.port ?? 3000,
            open: true,
            hot: true,
            client:{
              progress: true
            },
            compress: true,
            historyApiFallback: true,
          })
}