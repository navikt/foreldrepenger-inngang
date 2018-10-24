const path = require('path');
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const webpackConfig = {
    entry: {
        bundle: ['babel-polyfill', `${__dirname}/../../app/bootstrap.tsx`]
    },
    output: {
        path: path.resolve(__dirname, './../../../dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
        alias: {
            app: path.resolve(__dirname, './../../app')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: require.resolve('tslint-loader'),
                enforce: 'pre'
            },
            {
                test: /\.(ts|tsx)$/,
                include: [path.resolve(__dirname, './../../app')],
                loader: require.resolve('awesome-typescript-loader')
            },
            {
                test: /\.js$/,
                use: [{ loader: 'babel-loader' }],
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: 'svg-sprite-loader'
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb|nn|en/),
        new CaseSensitivePathsPlugin(),
        new SpriteLoaderPlugin({
            plainSprite: true
        }),
        new CopyWebpackPlugin([{from: path.resolve(__dirname, './../../../static/images'), to: './assets'}])
    ]
};

module.exports = webpackConfig;
