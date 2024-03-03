export interface BuildPaths{
    entry: string;
    html: string;
    output: string;
    public: string;
    '@': string;

}
export type BuildMode = 'development' | 'production';
export type BuildPlatform = 'mobile' | 'desktop';
export interface Enverenment {
  mode: BuildMode
}
export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    analizer?: boolean;
    platform: BuildPlatform
}