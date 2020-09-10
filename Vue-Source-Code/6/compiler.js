/**
 * getVNode  将模版(真实html)转化为 一个带有坑({{}})的vnode(模拟ast)
 * @param {Object} vnode 
 */
function getVNode(vnode) {
    let type = vnode.nodeType, _vnode;
    if (type == 1) {
        let attrs = vnode.getAttributes();
        let attrObj = {};
        for (var i = 0; i < attrs.length; i++) {
            attrObj[nodeName] = attrs[nodeValue]
        }
        _vnode = new VNode(vnode.nodeName, attrObj, type, vnode.nodeValue);
        let children = vnode.childrenNode;
        children.forEach(child => {
            _vnode.append(getVnode(child))
        })
    } else if (type == 3) {
        _vnode = new VNode(undefined, undefined, type, vnode.nodeValue);
    }
    return _vnode;
}

/**
 * combine 利用ast(带坑的vnode) 和 数据 生成一个vnode
 * @param {Object} vnode 
 * @param {Object} data 
 */
function combine(vnode, data) {
    let type = vnode.type,
        tag  = vnode.tag,
        attrs = vnode.data,
        _vnode;
    if(type==1){

    }else if(type==3){
        _vnode = new VNode();
    }
    return _vnode;
}

/**
 * parseVnode 将vdom 转化为 真实 dom
 * @param {Object} node 
 */
function parseVnode(node){

}