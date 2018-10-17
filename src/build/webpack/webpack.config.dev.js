const path = require('path');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config.global.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

webpackConfig.mode = 'development';

webpackConfig.module.rules.push({
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader']
});

webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
        template: './src/app/index.html',
        inject: 'body',
        alwaysWriteToDisk: true
    })
);

webpackConfig.plugins.push(
    new HtmlWebpackHarddiskPlugin({
        outputPath: path.resolve(__dirname, '../../../dist/dev')
    })
);

webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css',
        disable: false,
        allChunks: true
    })
);

module.exports = Object.assign(webpackConfig, {
    devtool: 'inline-source-map'
});
