var path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'; // true or false
console.log('====================================');
console.log(isProd);
console.log('====================================');
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
            // {
            //     test: /\.css|styl$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: [{
            //             loader: 'css-loader',
            //             options: {
            //                 minimize: true //css压缩
            //             }
            //         }, 'postcss-loader', 'stylus-loader'],
            //         disable: !isProd  无效???
            //     })
            // },
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
        extensions: ['.js', '.json', 'styl']
    },
    plugins: []
}