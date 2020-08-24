// https://www.webpackjs.com/guides/tree-shaking/

//「副作用」的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。


// 虽然生产模式下默认开启，但是由于经过 babel 编译全部模块被封装成 IIFE(立即执行函数)
// IIFE 存在副作用无法被 tree-shaking 掉
// 需要配置 { module: false }和 sideEffects: false
// rollup 和 webpack 的 shaking 程度不同，以一个 Class 为例子