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
            }, {
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
    // devtool: '#cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.json', 'styl']
    },
    plugins: []
}