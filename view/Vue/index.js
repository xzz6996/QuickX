


Vue 中 key 值的作用？
 更高效的更新虚拟dom。

Vue 组件间通信有哪些方式?
 props / $emit / $on 
 vuex / bus  
 $parent /$children / $ref 
 provide / inject  (https://cn.vuejs.org/v2/api/#provide-inject)
 $attrs / $listeners

Vue watch 和 computed 的区别?
    watch : 支持异步、数据发生变化就会更新
    computed: 支持缓存、只有依赖的数据发生变化时，才会重新计算 
    
Vue  route 和 router 的区别是什么？
    route : 路由信息对象，包括path,params,hash,query,fullPath,matched,name等路由信息参数。
    router : 路由实例对象，包括了路由的跳转方法(push、replace)，钩子函数等。


Vue $nextTick 
    //https://mp.weixin.qq.com/s/mCcW4OYj3p3471ghMBylBw
    1 vue用异步队列的方式来控制DOM更新和nextTick回调先后执行
    2 microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕
    3 因为兼容性问题，vue不得不做了microtask向macrotask的降级方案


描述下 vue 从初始化页面--修改数据--刷新页面 UI 的过程？(new Vue)
    当 Vue 进入初始化阶段时，一方面 Vue 会遍历 data 中的属性，并用 Object.defineProperty 将它转化成 getter/setter 的形式，实现数据劫持(暂不谈 Vue3.0 的 Proxy)；另一方面，Vue 的指令编译器 Compiler 对元素节点的各个指令进行解析，初始化视图，并订阅 Watcher 来更新试图，此时 Watcher 会将自己添加到消息订阅器 Dep 中，此时初始化完毕。
    当数据发生变化时，触发 Observer 中 setter 方法，立即调用 Dep.notify(),Dep 这个数组开始遍历所有的订阅者，并调用其 update 方法，Vue 内部再通过 diff 算法，patch 相应的更新完成对订阅者视图的改变。

Vue 深入响应式原理
 //https://cn.vuejs.org/v2/guide/reactivity.html



// event bus
// 自行实现 dispatch 和 broadcast 方法

// vue 全家桶使用，vuex，vue-router
//
// 组件通信
// 第二层：原理

// new vue 时候发生什么，每个生命周期对应的源码做了什么
// data，watcher，computer的源码实现

// 指令的本质
// vue 的性能优化
// Diff 本质
// 第三层：组件的实现




// Vue.js源码全方位深入解析做补充。电子书：《Vue.js 源码揭秘》对于router，vuex，slot，keep-alive有详细解释。
// 尤雨溪教你写vue 高级vue教程 源码分析!!!!这个我特意去fronted master冲了几百元，没想到居然有搬运。
// 最后看完就做一下题目，看看自己能达到那种水平吧。12道vue高频原理面试题,你能答出几道?
// 《深入浅出Vue.js》， 这本书真的好，作者每单介绍一个部分的时候，都会由最简单抽象的一个demo，一步一步变成框架实际的样子，最后拿你写的demo和框架实际的对比，分析双方优缺点。
// 要先看剖析 Vue.js 内部运行机制把手教你如何写一个最小mvvm模式，mvvm是最核心的思想。当你能懂下面的图时候,那么可以进入下一步了