const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyWebpack = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/i,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebpack({
            title: 'My webpack app',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyWebpack({
            patterns: [
                { from: './src/assets/', to: 'assets/' }
            ]
        })
    ]
}