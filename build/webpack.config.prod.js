const BaseWebpackConfig = require('../webpack.config.js');

const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')   // 压缩打包插件

module.exports = merge(BaseWebpackConfig,{
    plugins:[
        //压缩js代码--链接 https://doc.webpack-china.org/plugins/uglifyjs-webpack-plugin/
        new UglifyJSPlugin(),
        // 启动 minify
        new webpack.LoaderOptionsPlugin({ minimize: true }),
    ]
})

