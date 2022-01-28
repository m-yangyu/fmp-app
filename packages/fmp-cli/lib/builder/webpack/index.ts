import { getEntry } from '../entry';
import * as path from 'path';
const { VueLoaderPlugin } = require('vue-loader/dist/index')

export const getWebpackConfig = () => {
    const config: Record<string, any> = {};

    config.entry = getEntry();

    config.output = {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist'),
    };

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

    config.plugins = [
        new VueLoaderPlugin(),
    ];

    return config;
}