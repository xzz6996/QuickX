class Dep {
    constructor() {
        this.subs = []; // 存储的是与 当前 Dep 关联的 watcher
    }
    //添加一个 Watcher
    addSub() {

    }
    //移除一个Watcher
    removeSub() {

    }
    /** 将当前 Dep 与当前的 watcher ( 暂时渲染 watcher ) 关联*/
    depend() {

    }
    //触发与之关联的Watcher的update方法，用于更新
    notify() {
        if(Dep.target){
            Dep.target.update()
        }
    }
}


Dep.target = null; //全局的Watcher对象