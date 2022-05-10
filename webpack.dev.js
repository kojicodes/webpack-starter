const HtmlWebpack = require('html-webpack-plugin');

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
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebpack({
            title: 'My webpack app',
            template: './src/index.html'
        })
    ]
}