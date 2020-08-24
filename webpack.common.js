const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    entry: {
        a :"./view/Webpack/1.js",
        b :"./view/Webpack/2.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "", //浏览器会从这个目录开
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    performance: {
        hints:false //关闭 webpack 的性能提示
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "async",// all async initial
    //         minSize: 30000,
    //         maxSize: 0,
    //         minChunks: 1,
    //         maxAsyncRequests: 5,
    //         maxInitialRequests: 3,
    //         automaticNameDelimiter: "~",
    //         name: true,
    //         cacheGroups: { 
    //             vendor: {
    //                 name: "vendor",
    //                 test: /[\\/]node_modules[\\/]/,
    //                 chunks: "all",
    //                 priority: 10 // 优先级
    //             },
    //             common: {
    //                 name: "common",
    //                 test: /[\\/]src[\\/]/,
    //                 minSize: 1024,
    //                 chunks: 'all',
    //                 priority: 5
    //             },
    //             // defaultVendors: {
    //             //     filename: '[name].bundle.js'
    //             // }    
    //         }
    //     }
    // }
}