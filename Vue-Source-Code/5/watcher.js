/**
 * Watcher 观察者， 发射更新的行为
 */
class Watcher {
    /**
     * 
     * @param {Object} vm  vue实列
     * @param {String|Function} exOrfn  如果是渲染 watcher，则是函数；如果是计算watcher，就是 路径表达式 
     */
    constructor(vm, exOrfn) {
        this.vm = vm;
        this.getter = exOrfn;
        this.deps = []; //依赖项
        this.depIds = {}; // 是一个 Set 类型, 用于保证 依赖项的唯一性 ( 简化的代码暂时不实现这一块 )

        // 一开始需要渲染: 真实 vue 中: this.lazy ? undefined : this.get()
        this.get();
    }
    //计算 触发getter
    get(){
        this.getter.call(this.vm,this.vm)
    } 
    //执行，判断 是异步还是同步  
    run(){
        this.get()
        // 在真正的 vue 中是调用 queueWatcher, 来触发 nextTick 进行异步的执行
    }
    //对外公开的函数， 用于 属性发生变化的时候的接口 
    update(){
        this.run()
    }
    //清除队列
    cleanupDep(){
        
    }
}