import webpack from 'webpack';
import type { Configuration } from "webpack-dev-server";
import { buildDevServer } from './buildDevServer';
import { builLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(option : BuildOptions):webpack.Configuration{
    const isDev = option.mode === 'development';
    const {mode, paths, port} = option;
 return {
    mode: mode,
    entry:  paths.entry,
    output:{
        path: paths.output,
        filename: '[name].[contenthash].js',
        clean: true
    },
    devtool: isDev ? 'inline-source-map': false,
    plugins: buildPlugins(option),
    module: {
        rules: builLoaders(option),
      },
      resolve: buildResolvers(option),
      devServer: isDev ? buildDevServer(option) : undefined
};
}