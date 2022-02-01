/**
 * mount 挂载
 */
JVue.prototype.mount = function () {
    this.render = this.createRender()
    this.mountComponent();
}
/**
 * update 将虚拟vnode渲染到页面中，这里涉及 diff
 * @param {Object} vnode 
 */
JVue.prototype.update = function (vnode) {
    let realDom = parseVNode(vnode)
    this._parent.replaceChild(realDom, document.querySelector(this._el))
}


/**
 *  createRender 生成render函数，利用ast和数据生成一个vnode
 */
JVue.prototype.createRender = function () {
    let ast = getVNode(this._template); //生成ast(用带坑({{}})的vnode模拟),并缓存ast
    return function render() {
        return combine(ast, this._data);
    }
}

JVue.prototype.mountComponent = function () {
    let mount = () => {
        this.update(this.render())
    }
    new Watcher(this, mount);
}