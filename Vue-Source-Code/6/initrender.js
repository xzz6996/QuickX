/**
 * mount 挂载
 */
JVue.prototype.mount = function () {
    this.render = this.createRender()
    mountComponent();
}
/**
 * update
 */
JVue.prototype.update = function () {

}


/**
 *  createRender 生成render函数，利用ast和数据生成一个vnode
 */
function createRender() {
    let ast = getVNode(this._template); //生成ast(用带坑({{}})的vnode模拟),并缓存ast
    return function render() {
        return combine(ast, this._data);
    }
}

function mountComponent() {
    let mount = ()=>{
        this.update(this.render)
    }
}