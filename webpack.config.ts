import webpack from 'webpack';
import path from 'path';
import {buildWebpack} from './config/build/buildWebpack'
import { BuildMode, BuildPaths, BuildPlatform } from './config/build/types/types';

export interface Enverenment {
  mode: BuildMode;
  port: number;
  analizer: boolean;
  platform: BuildPlatform 
}

export default (env:Enverenment)=> {
  const isDev = env.mode === 'development';
  const paths:BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    '@': path.resolve(__dirname, 'src'),
  }
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000, 
    mode: env.mode ?? 'development', 
    analizer: env.analizer ?? false,
    paths,
    platform: env.platform ?? 'desktop'
  });

return config
}

