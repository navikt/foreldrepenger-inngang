const path = require('path');
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const webpackConfig = {
    entry: {
        bundle: [`${__dirname}/../../app/bootstrap.tsx`],
    },
    output: {
        path: path.resolve(__dirname, './../../../dist'),
        filename: 'js/[name].js',
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
        alias: {
            app: path.resolve(__dirname, './../../app'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: false,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: [{ loader: 'babel-loader' }],
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: [{ loader: 'svg-sprite-loader', options: {} }],
            },
            {
                test: /\.xml$/,
                use: 'raw-loader',
            },
        ],
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb|nn|en/),
        new CaseSensitivePathsPlugin(),
        new SpriteLoaderPlugin({
            plainSprite: true,
        }),
    ],
};

module.exports = webpackConfig;
