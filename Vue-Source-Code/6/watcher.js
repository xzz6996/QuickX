let id;
/**
 * Watcher 观察者,用来 发射更新的方法
 */
class Watcher {
    /**
     * @param {Object} vm  //当前的vue实例对象
     * @param {Function|String} expOrfn  //如果是渲染watcher 就是渲染函数，如果是计算watcher 就是 路径表达式()
     */
    constructor(vm, expOrfn) {
        this.vm = vm; 
        this.getter = expOrfn;
        this.id = id++;
        this.deps = []; //当前的依赖项，包含多个属性的dep
        this.get()
    }
    get() {
        //用来计算或执行处理函数
        pushStack(this)
        this.getter.call(this.vm,this.vm)
        popStack()
    }
    run() {
        // 运行、用来判断内部是使用异步或同步，最终指向get
        this.get()
    }
    addDep(dep){
        //将当前watcher与dep关联
        this.deps.push(dep)
    }
    update() {
        //公共的外部方法，该方法触发run
        this.run()
    }
    cleanDep() {
        //清除队列
    }
}