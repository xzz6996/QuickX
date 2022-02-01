{
    html - webpack - plugin 生成一个新的html文件
    new htmlWebpackPlugin({
        template:"./src/index.html",
        filename:"index/html"
    })

    clean - webpack - plugin 清除打包的文件夹
    new cleanWebpackPlugin()

    terser-webapck-plugin 该插件使用terser压缩javascript
    new terserWebpackPlugin({
        terserOptions:{
            compress:{
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log'] // 移除console
            }
        }
    })
    
    uglifyjs-webpack-plugin 该插件使用uglifyjs压缩javascript
    new uglifyWebpackPlugin()
}


{
    style - loader
    css - loader
    sass - loader & node - sass
    url - loader
    file - loader
    csv - loader
    xml - loader
}