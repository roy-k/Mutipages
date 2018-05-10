var path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {entrys} = require('./pages')

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        ...entrys,
        vendor: ['jquery']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=static/img/h5_[hash:8].[name].[ext]'
            }, {
                test: /\.pug$/,
                loader: 'pug-loader'
            }, {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.styl', '.css'],
        alias: {
            reset$: path.resolve(__dirname, '../src/common/css/reset.css'),
            common$: path.resolve(__dirname, '../src/common/css/common.css'),
            libs: path.resolve(__dirname, '../src/common/js/libs'),
        }
    },
    plugins: []
}