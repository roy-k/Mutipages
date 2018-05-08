var path = require('path');
var webpack =require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default
var baseWebpackConfig = require('./webpack.common');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {htmlPluginArr} = require('./pages')

// baseWebpackConfig.module.rules[0].use = ExtractTextPlugin.extract({
//     fallback: "style-loader",
//     use: [{
//         loader: 'css-loader',
//         options: {
//             minimize: true //css压缩
//         }
//     }, 'postcss-loader', 'stylus-loader'],
//     publicPath: '//static.yk.qq.com/pictures/open/'
// });


webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[hash:6].js',
        publicPath: '//static.yk.qq.com/pictures/open/',
        chunkFilename: "static/js/[name].[hash:6].js",
    },
    devtool: false,
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                vender: {
                    test: 'vendor',
                    name: 'vendor',
                }
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),

        ...htmlPluginArr.map(({filename, template, chunks}) => {
            return new HtmlWebpackPlugin({
                filename, template, chunks
            })
        }),

        new ExtractTextPlugin('static/css/[hash:6].min.css'),

        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production',
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            pngquant: {
              quality: '95-100'
            }
          })
    ]
});

module.exports = webpackConfig;
