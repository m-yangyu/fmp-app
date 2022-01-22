import { getWebpackConfig } from "./webpack"
import * as webpack from 'webpack';
import { getConfig, BuildType } from "../config";

export const build = () => {
    const config = getConfig();
    if (config.buildType === BuildType.webpack) {
        const webpackConfig = getWebpackConfig();
        const compiler = webpack(webpackConfig);
        console.log(compiler.run);
    }
}