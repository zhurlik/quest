var webpack = require('webpack');
var HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src/main/javascript',

    entry: './app',

    output: {
        path: __dirname + '/public/js',
        publicPath: './js/',
        filename: "[name].js"
    },

    externals: {
        "bundle!jquery": "$"
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpack({
            title: 'Пиратский квест для Ани и Кати',
            filename: '../index.html',
            template: __dirname + '/src/main/templates/index.ejs'
        }),
        new webpack.ProvidePlugin({
            // to be able to use $ in any modules
            $: "jquery",
            Backbone : "backbone"
        })
    ],

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            {test: /\.mp4$|\.jpg$|\.png$/, loader: 'url?limit=1000&mimetype=video/mp4'}
        ]
    }
};