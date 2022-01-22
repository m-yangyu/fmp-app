import * as path from 'path';
import * as fs from 'fs-extra';

export enum BuildType {
    webpack = 'webpack',
    vite = 'vite',
}

export interface CustomConfigType {
    buildType?: BuildType.webpack | BuildType.vite;
}

const root = process.cwd();
export const globalConfig = {
    configPath: path.join(root, 'fmp.config.js'),
    appConfigPath: path.join(root, 'src', 'app.json'),
    source: path.join(root, 'src'),
};

export const getDefaultConfig = () => {
    const config: CustomConfigType = {
        buildType: BuildType.webpack,
    };
    return config;
}

export const mergeConfig = (customConfig: CustomConfigType, defaultConfig: CustomConfigType) => {
    return defaultConfig;
}

export const getConfig = () => {
    const { configPath } = globalConfig;
    const defaultConfig = getDefaultConfig();

    if (fs.pathExistsSync(configPath)) {
        const customConfig = require(configPath);
        return mergeConfig(customConfig, defaultConfig);
    }

    return defaultConfig;
}