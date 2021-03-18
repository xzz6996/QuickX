const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    // 单入口
    // entry: './src/main.js',
    // output: {
    //     path: path.resolve(__dirname, './dist'),
    //     filename: 'bundle.js'
    // },
    // 多入口
    entry: {
        main: './src/main.js',
        treeshaking: './src/treeshaking.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    optimization: {
        usedExports: true  // 在development模式当中，默认是没有Tree Shaking这个功能的，要是想把它加上，要配置optimization的usedExports
    }
}