const webpackConfig = require('./webpack.config.global.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

webpackConfig.mode = 'production';
webpackConfig.devtool = 'source-map';

webpackConfig.module.rules.push({
    test: /\.less$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
});

webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
        template: `${__dirname}/../../app/index.html`,
        inject: 'body'
    })
);

webpackConfig.output.filename = 'js/[name].[contenthash].js';
webpackConfig.output.chunkFilename = 'js/[name].[contenthash].js';

webpackConfig.optimization = {
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
};

webpackConfig.plugins.push(
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
    })
);

webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css',
        disable: false,
        allChunks: true
    })
);

module.exports = webpackConfig;
