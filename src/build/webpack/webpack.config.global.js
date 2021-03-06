const path = require('path');
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const webpackConfig = {
    entry: {
        bundle: ['babel-polyfill', `${__dirname}/../../app/bootstrap.tsx`],
    },
    output: {
        path: path.resolve(__dirname, './../../../dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
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
                include: [path.resolve(__dirname, './../../app')],
                loader: require.resolve('awesome-typescript-loader'),
            },
            {
                enforce: 'pre',
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    cache: true,
                },
            },
            {
                test: /\.js$/,
                use: [{ loader: 'babel-loader' }],
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: 'svg-sprite-loader',
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
