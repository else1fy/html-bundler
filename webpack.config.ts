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
                use: [
                    {
                        loader: 'swc-loader',
                        options: {
                            jsc: {
                                parser: {
                                    syntax: "typescript",
                                },
                            },
                        },
                    },
                ],
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
            entry: 'src/pages/',
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler',
        },
        extensions: ['.ts', '...'],
    },
}

export default config
