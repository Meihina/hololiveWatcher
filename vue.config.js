module.exports = {
    publicPath: './',
    outputDir: 'dist',
    devServer: {
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/api': {
                target: 'https://api.live.bilibili.com/',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            },
            // https://api.bilibili.com/x/space/acc/info?mid=389859190
            '/userApi': {
                target: 'https://api.bilibili.com/',//这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/userApi': ''//请求的时候使用这个api就可以
                }
            },
        }
    }
}