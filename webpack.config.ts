import { VueLoaderPlugin } from 'vue-loader'
import HtmlBundlerPlugin from 'html-bundler-webpack-plugin'
import type { Configuration } from 'webpack'

const config: Configuration = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.vue$/i,
                use: ['vue-loader'],
            },
            {
                exclude: /node_modules/,
                test: /\.(js|ts)$/i,
                use: ['swc-loader'],
            },
            {
                test: /\.(sass|scss)$/i,
                use: ['css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        clean: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\\/]node_modules[\\\/].+\.(js|ts)$/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlBundlerPlugin({
            entry: 'src/pages/'
        })
    ],
}

export default config