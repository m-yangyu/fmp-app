import { getEntry } from '../entry';

export const getWebpackConfig = () => {
    const config: Record<string, any> = {};

    config.entry = getEntry();

    config.module = {
        rules: [
            {
                test: '\.(j|t)s',
                resouceQuery: 'page',
                use: [
                    './loader/fmp-entry-loader.js'
                ]
            }
        ]
    }

    config.plugins = [];

    return config;
}