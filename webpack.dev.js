const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = {

    mode: 'development',
    output: {
        clean: true
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
        })
    ]
}