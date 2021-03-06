import { getEntry } from '../entry';
import * as path from 'path';

export const getWebpackConfig = () => {
    const config: Record<string, any> = {};

    config.entry = getEntry();

    config.mode = "development";

    config.output = {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist'),
    };

    config.performance = {

    }

    config.module = {
        rules: [
            // {
            //     test: /\.(t|j)s$/,
            //     use: [
            //         path.join(__dirname, './loader/fmp-entry-loader.js')
            //     ]
            // }
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ]
    }

    return config;
}