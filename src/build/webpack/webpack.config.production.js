const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.global.js');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: `${__dirname}/../../../`
        }),
        new HtmlWebpackPlugin({
            template: `${__dirname}/../../app/index.html`,
            inject: 'body'
        }),
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                mangle: {
                    keep_classnames: true,
                    keep_fnames: true
                },
                compress: {
                    keep_fnames: true,
                    keep_classnames: true
                }
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
            disable: false,
            allChunks: true
        }),
        new CompressionPlugin(),

        new CopyWebpackPlugin([{ from: path.resolve(__dirname, './../../../static'), to: '.' }])

    ]
});
