var path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
              test: /\.css|styl$/,
              use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"]
          },

          //   {
          //   test: /\.css|styl$/,
          //   loader: ExtractTextPlugin.extract(
          //     Object.assign(
          //       {
          //         fallback: {
          //           loader: require.resolve('style-loader'),
          //           options: {
          //             hmr: false,
          //           },
          //         },
          //         use: [
          //           {
          //             loader: require.resolve('css-loader'),
          //             options: {
          //               importLoaders: 1,
          //               minimize: true,
          //               sourceMap: false,
          //             },
          //           },
          //           {
          //             loader: require.resolve('postcss-loader'),
          //             options: {
          //               // Necessary for external CSS imports to work
          //               // https://github.com/facebookincubator/create-react-app/issues/2677
          //               ident: 'postcss',
          //               plugins: () => [
          //                 require('postcss-flexbugs-fixes'),
          //                 autoprefixer({
          //                   browsers: [
          //                     '>1%',
          //                     'last 4 versions',
          //                     'Firefox ESR',
          //                     'not ie < 9', // React doesn't support IE8 anyway
          //                   ],
          //                   flexbox: 'no-2009',
          //                 }),
          //               ],
          //             },
          //           },
          //           {loader: require.resolve('stylus-loader')}
          //         ],
          //       },
          //     )
          //   ),
          //   // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
          // },

            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=static/img/h5_[hash:8].[name].[ext]'
            },
            {
              test: /\.pug$/,
              loader: 'pug-loader'
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