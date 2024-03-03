import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import  webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from "path";
export function buildPlugins(option : BuildOptions) : Configuration['plugins']{
    const isDev = option.mode === 'development';
    const isProd = option.mode === 'production';
    const plugins : Configuration['plugins'] | any = [
        new HtmlWebpackPlugin({template: option.paths.html, favicon: path.resolve(option.paths.public, 'favicon.ico')}), 
        new DefinePlugin({
        __PLATFORM__: JSON.stringify(option.platform),
        __MODE__:JSON.stringify(option.mode)
        })
        
];



    if(isDev){
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new TsconfigPathsPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
    }
    if(isProd){
        plugins.push(new MiniCssExtractPlugin({filename: "css/[name].[contenthash].css", chunkFilename: "css/[id].[contenthash].css"}));
        plugins.push(new CopyPlugin({
            patterns: [
              { from: path.resolve(option.paths.public, 'locales'), to: path.resolve(option.paths.output, 'locales') },
            ],
          }),)
    }
    if(option.analizer){
        plugins.push(new BundleAnalyzerPlugin())
    }
 return plugins
}