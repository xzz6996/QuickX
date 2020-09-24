const CompressionWebpackPlugin = require('compression-webpack-plugin'); // 开启压缩
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    outputDir: "dist",
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);

        // 别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'));
        // 压缩图片
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            });
    },
    configureWebpack: config => {
        // 文件后缀名
        config.resolve.extensions = ['.js', '.vue', '.scss', '.css']

        // 为生产环境修改配置...
        if (process.env.NODE_ENV === 'production') {
            // 服务器也要相应开启gzip
            new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: /\.(js|css)$/, // 匹配文件名
                threshold: 10000, // 对超过10k的数据压缩
                deleteOriginalAssets: false, // 不删除源文件
                minRatio: 0.8 // 压缩比
            })

            // 生成转换过后的代码
            config.devtool('cheap-eval-source-map')

            // 用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
            new webpack.HashedModuleIdsPlugin()

            config.optimization = {
                //提取公共代码
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 1000 * 60,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                // 排除node_modules 然后把 @ 替换为空 ,考虑到服务器的兼容
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                },
                //去除 console.log
                minimizer: [
                    new TerserPlugin({
                        terserOptions: {
                            compress: {
                                drop_console: true,
                                drop_debugger: false,
                                pure_funcs: ["console.log"]
                            }
                        }
                    }),
                ],
                //去除死代码
                //sideEffects: true
            };

            // 取消webpack警告的性能提示
            config.performance = {
                hints: 'warning',
                //入口起点的最大体积
                maxEntrypointSize: 1000 * 500,
                //生成文件的最大体积
                maxAssetSize: 1000 * 1000,
                //只给出 js 文件的性能提示
                assetFilter: function (assetFilename) {
                    return assetFilename.endsWith('.js');
                }
            }
        } else {
            // 为开发环境修改配置...
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/static/css/index.scss";`
            }
        }
    },
    devServer: {
        hot: true,
        host: '192.168.100.18',
        port: 8888,
        open: true,
        // proxy: {
        //     '/api': {
        //         target: '',
        //         ws: true,
        //         changeOrigin: true
        //     },
        // }
    }
}