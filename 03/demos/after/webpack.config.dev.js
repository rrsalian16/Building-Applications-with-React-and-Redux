const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    target: 'web',
    devTool: 'cheep-module-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        stats: 'minimal',
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        https: false
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './public/favicon.ico',
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: './node_modules',
            use: ['bable-loader']
        }, {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader']
        }

        ]
    }
}