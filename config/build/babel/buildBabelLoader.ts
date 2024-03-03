
import { BuildOptions } from "../types/types";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";

export function buildBabelLoader(option: BuildOptions){
  const plugins = [];
  if(option.mode === 'production') plugins.push([removeDataTestIdBabelPlugin, {props: ['data-testid']}])
    return ({
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { 
            presets: [
              '@babel/preset-env',
              "@babel/preset-typescript",
              ["@babel/preset-react", {runtime: "automatic"}]
          ],
          plugins: plugins.length?plugins:undefined
          }
        }
      })
}