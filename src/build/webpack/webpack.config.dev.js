const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.global.js');

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app/index.html',
            inject: 'body',
            alwaysWriteToDisk: true,
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.resolve(__dirname, '../../../dist/dev'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
            disable: false,
            allChunks: true,
        }),
    ],
});
