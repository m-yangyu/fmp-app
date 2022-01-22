import { getEntry } from '../entry';

export const getWebpackConfig = () => {
    const config: Record<string, any> = {};

    config.entry = getEntry();


    return config;
}