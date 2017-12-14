const BaseWebpackConfig = require('../webpack.config.js');

const path = require('path');
const merge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(BaseWebpackConfig,{
    devServer:{
        host:'127.0.0.1', // 主机地址
        port:9001,  // 指定监听的端口号
        contentBase:path.join(__dirname,'dist'),    // 告诉服务器从哪来提供内容。只有在你想要提供静态文件时才需要。
        publicPath:'/', // 用于确定从哪里提供bundle，并且此选项优先
        compress:true,  // 一切服务都启用「gzip」压缩
    },
    plugins:[
        new OpenBrowserPlugin({
            url: 'http://localhost:9001/',
        })
    ]
})

