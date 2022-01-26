import { getWebpackConfig } from "./webpack"
import * as webpack from 'webpack';
import { getConfig, BuildType } from "../config";

export const build = () => {
    const config = getConfig();
    if (config.buildType === BuildType.webpack) {
        const webpackConfig = getWebpackConfig();
        console.log(webpackConfig);
        const compiler = webpack(webpackConfig);
        console.log(compiler.run);
        compiler.run((err, stats) => {
            console.log(stats, 111);
        });
    }
}