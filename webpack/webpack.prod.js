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


// var multipleHtml = [{
//     filename: "m.html",
//     path: "../src/index.html",
//     chunks: ['manifest', 'vendor', 'app']
// }]

// const arr = htmlPluginArr.map({filename, template, chunks} = {
//     return new HtmlWebpackPlugin({
//         filename, template, chunks
//     })
// })

webpackConfig = merge(baseWebpackConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[chunkHash:6].js',
        publicPath: '//static.yk.qq.com/pictures/open/',
        chunkFilename: "static/js/[name].[chunkHash:6].js",
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
        // new HtmlWebpackPlugin({
        //     template: '../src/m.html',
        //     inject: 'body',
        //     minify: {
        //         html: true
        //     },
        //     hash: false
        // }),
        ...htmlPluginArr.map(({filename, template, chunks}) => {
            return new HtmlWebpackPlugin({
                filename, template, chunks
            })
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        
        new ExtractTextPlugin('css/h5_.[hash:6].min.css'),
        

        // 编译时(compile time)插件
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"',
        // }),

        new ImageminPlugin({
            // disable: process.env.NODE_ENV !== 'production', // Disable during development
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            pngquant: {
              quality: '95-100'
            }
          })
    ]
});


if (process.env.npm_config_report) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;
