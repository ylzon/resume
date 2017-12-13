const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.[name].[chunkhash:8].js',
    },
    module: {
        rules: [
            // eslint-loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    // eslint options (if necessary)
                    "indent": 4,  // 缩进为4空格
                    "semi": [0, "always"], // 不管分号
                    "no-unused-vars": [2, {"vars": "local", "args": "after-used"}], // 不允许var后不使用变量
                }
            },
            // babel-loader
            {
                test: /\.js$/,
                exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'src'),
                loader: "babel-loader"
            },
            // file-loader
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 2048,
                        name: '[name].[hash].[ext]'
                    }
                }]
            },
            // html-loader
            {
                test: /\.html$/,
                exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'src'),
                loader: "html-loader"
            },
            // css-loader
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'src'),
                use: [
                    'style-loader','css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),
                                require('autoprefixer')({
                                    browsers:['last 5 versions']
                                }),
                            ]
                        }
                    }
                ]
            },
            // less-loader
            {
                test: /\.less$/,
                exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'src'),
                use: [
                    'style-loader','css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),
                                require('autoprefixer')({
                                    browsers:['> 0.2% in CN']
                                }),
                            ]
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        // html导入插件
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })

    ]
}