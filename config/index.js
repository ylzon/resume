module.exports = {
    pages:{
        // 配置多页面路径, 有几个页面则配置几个，配置后请重启dev
        // 注意:路径都是相对于 src 的路径
        index: './js/page/index.js',
    },
    browsers:{
        browsers: [
            'Chrome >= 40',
            'Firefox ESR',
            'Edge >= 12',
            'Explorer >= 9',
            'iOS >= 9',
            'Safari >= 9',
            'Android >= 4.3',
            'Opera >= 30'
        ]
    }
}
