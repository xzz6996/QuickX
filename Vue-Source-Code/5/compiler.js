let rkuohao = /\{\{(.+?)\}\}/g;
/**
 * 根据字符串访问对象的成员
 * @param {String} path 字符串路径
 * @param {Object} data 数据
 */
function getValueByPath(path, data) {
    let paths = path.split('.');
    let res = data, prop = null;
    while (prop = paths.shift()) {
        res = res[prop]
    }
    return res
}

/**
 * 将真实dom 转化为 虚拟dom
 * @param {Object} vnode 
 */
function getVNode(vnode) {
    let type = vnode.nodeType;
    let _vnode;
    if (type == 3) {
        _vnode = new VNode(undefined, undefined, vnode.nodeValue, type)
    } else if (type == 1) {
        let attrs = vnode.attributes;
        let _attrObj = {};
        for (let i = 0; i < attrs.length; i++) {
            _attrObj[attrs[i].nodeName] = attrs[i].nodeValue;
        }

        _vnode = new VNode(vnode.nodeName, _attrObj, undefined, type)
        let childNodes = vnode.childNodes;
        childNodes.forEach(item => {
            _vnode.appendChild(getVNode(item))
        })
    }
    return _vnode
}



/**
 * 将带有坑({{name}})的虚拟dom和数据 结合，生成带有数据的虚拟dom
 * 目的：模拟vue中的 AST --> vnode
 * @param {Object} vnode 
 * @param {Object} data 
 */
function combine(vnode, data) {
    let _type = vnode.type;
    let _value = vnode.value;
    let _data = vnode.data;
    let _tag = vnode.tag;
    let _children = vnode.children;
    let _vnode = null;
    if (_type == 3) {
        _value = _value.replace(rkuohao, function (_, g) {
            return getValueByPath(g.trim(), data)
        })
        _vnode = new VNode(_tag, _data, _value, _type)
    } else if (_type == 1) {
        _vnode = new VNode(_tag, _data, _value, _type)
        _children.forEach(_subvnode => _vnode.appendChild(combine(_subvnode, data)));
    }
    return _vnode
}

/**
 * 将虚拟dom 转化为 真正dom
 * @param {Object} vnode 
 */
function parseVnode(vnode) {
    let type = vnode.type;
    let _vdom = null;
    if (type == 3) {
        _vdom = document.createTextNode(vnode.value)
    } else if (type == 1) {
        _vdom = document.createElement(vnode.tag)
        let attrs = vnode.data;
        Object.keys(attrs).forEach(key => {
            _vdom.setAttribute(key, attrs[key])
        })
        let children = vnode.children;
        children.forEach(item => {
            _vdom.appendChild(parseVnode(item))
        })
    }
    return _vdom
}

