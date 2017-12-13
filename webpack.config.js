const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: {
        main: './src/main.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.[name].[chunkhash].js',
    },
    module: {
        rules: [
            
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            title: '12312312312',
            inject: 'body'
        })
    ]

}