let depid;
class Dep {
    constructor() {
        this.subs = []; //存储的是当前Dep相关联的watcher
        this.id = depid++;
    }
    addSub(sub) {
        //添加一个watcher
        this.subs.push(sub)
    }
    removeSub(sub) {
        for (let i = this.subs.length - 1; i >= 0; i--) {
            if (this.subs[i] == sub) {
                this.subs.splice(i, 1)
            }
        }
    }
    depend() {
        //将当前Dep与当前的watcher相关联
        if (Dep.target) {
            this.addSub(Dep.target);
            Dep.target.addDep(this);
        }
    }
    notify() {
        //触发与之相关联的watcher的update方法，起到更新的作用
        //真正的vue源码中，是依次触发this.subs中的watcher的update方法
        let deps = this.subs.slice();
        deps.forEach(watcher => {
            watcher.update();
        })
    }
}


Dep.target = null; //全局的一个容器，存储渲染watcher;相当于全局的Watcher;
let targetStack = [];

function popStack() {
    targetStack.shift()
}
function pushStack(target) {
    targetStack.unshift(target)
    Dep.target = target;
}
/**
 * 在 watcher 调用 get 方法的时候, 调用 pushTarget( this )
 * 在 watcher 的 get 方法结束的时候, 调用 popTarget()
 */