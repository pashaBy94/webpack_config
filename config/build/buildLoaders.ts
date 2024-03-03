import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/types";
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function builLoaders(option : BuildOptions):ModuleOptions['rules']{
    const isDev = option.mode === 'development';
    const isProd = option.mode === 'production';
const scssLoaderModules = {
  // test: /\.css$/i,
        loader: "css-loader",
        options: {
          modules: {
            mode: "local",
            localIdentName: isDev?"[path][name]__[local]":"[local]__[hash:base64:5]",

          },
        },
};
    const imagLoader = {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    };
    const svgLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ 
        loader: '@svgr/webpack', 
        options: { 
          icon: true, 
          // svgoConfig:{
          //   plugins:[{
          //       name: 'convertColors', 
          //       params: {currentColor: true}
          //   }]
          // } 
        } 
      }],
    };
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          scssLoaderModules,
          // Compiles Sass to CSS
          "sass-loader",
        ],
      };
      // const tsLoader = {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // }

      const tsLoader = {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: isDev,
            }
          }
        ]
      };
      const babel = buildBabelLoader(option);

return [ 
    scssLoader,
    // tsLoader,
    babel,
    imagLoader,
    svgLoader
  ]
}