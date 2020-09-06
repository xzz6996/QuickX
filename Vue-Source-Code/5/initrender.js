
JVue.prototype.mount = function () {
    this.render = this.createRenderFn();
    //render 利用ast和数据生成一个vnode(带数据)

    this.mountComponent()
}
JVue.prototype.mountComponent = function () {
    let mount = () => {
        this.update(this.render())
    }
    Dep.target = new Watcher(this,mount); 
}
JVue.prototype.update = function (vnode) {
    // 将虚拟dom渲染到页面中，这里涉及 diff
    let realDom = parseVnode(vnode);

    this._parent.replaceChild(realDom, document.querySelector(this._options.el))
}
JVue.prototype.createRenderFn = function () {
    //生成render函数，目的是缓存的ast (我么这里使用vnode来模拟)

    let ast = getVNode(this._template);//生成一个{{}}的vnode

    return function render() {
        let _vnode = combine(ast, this._data);// 生成一个带数据的vnode
        return _vnode
    }
}

