var path = require('path');

const {entrys} = require('./pages')

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        ...entrys,
        vendor: ['jquery'],
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"],
            }, 
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            
            // {
            //     test: /\.less$/,
            //     use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
            // }, 
            
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/h5_[hash:8].[name].[ext]'
            },

            {
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