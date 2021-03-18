{
    // source map 可将编译后的代码映射回原始代码
    devtool: {
        'cheap-module-eval-source-map'  // 开发环境
        'cheap-module-source-map'       // 正式环境
    }
}
{
    // Tree Shaking  移除javascript上下文中未引用的代码(dead-code)
    // package.json: { 'sideEffects': false / ['babel-polyfill','@babel/polyfill'] }  排除  babel-polyfill/@babel/polyfill
    // 开发模式下 webpack.config.js 需增加 optimization:{usedExports:true}
}


{
    // 打包后的文件分析，理解打包过程
    // 1、打包后的代码是一个立即执行函数，且传入的参数为一个数组
    // 2、参数数组就是我们引用的模块
    // 3、每一个模块对应着数组的位置就是那么的id
    // 4、在立即函数中加载入口文件，并执行__webpack_require__ ： 加载并执行某一个模块并将模块缓存在 installedModules 中。
    //    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);


    (function (modules) {
        var __webpack_module_cache__ = {}; //缓存
        // 加载模块的函数
        function __webpack_require__(moduleId) {
            // 检查模块是否存在缓存里
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== undefined) {
                return cachedModule.exports; //模块存在缓存里，直接返回模块
            }
            //  创建一个新模块，并且缓存起来
            var module = __webpack_module_cache__[moduleId] = {
                exports: {}
            };

            // 调模块的函数，modules
            __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                
            // 返回对应模块
            return module.exports;
        }
        //加载入口文件
        __webpack_require__("./src/main.js"); 
    })
}

{
    
}