/**
 * getVNode  将模版(真实html)转化为 一个带有坑({{}})的vnode(模拟ast)
 * @param {Object} vnode 
 */
function getVNode(vnode) {
    let type = vnode.nodeType, _vnode;
    if (type == 1) {
        let attrs = vnode.attributes;
        let attrObj ={};
        for(var i=0;i<attrs.length;i++){
            attrObj[attrs[i].nodeName] = attrs[i].nodeValue;
        }
        _vnode = new VNode(vnode.nodeName, attrObj, type, vnode.nodeValue);
        let children = vnode.childNodes;
        children.forEach(child => {
            _vnode.appendChild(getVNode(child))
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
        value =vnode.value,
        children=vnode.children,
        _vnode;
    if(type==1){
        _vnode = new VNode(tag,attrs,type,value);
        children.forEach(subChild=>{
            _vnode.appendChild(combine(subChild,data))
        })
    }else if(type==3){
        value = value.replace(rkuohao,function(_,g){
            return getValueByPath(g.trim(),data)
        })
        _vnode = new VNode(tag,attrs,type,value);
    }
    return _vnode;
}
let rkuohao = /\{\{(.+?)\}\}/g;
/**
 * getValueByPath 通过字符串路径访问对象的成员
 * @param {String} path 
 * @param {Object} data 
 */
function getValueByPath(path,data){
    let paths = path.split('.');
    let res= data,prop;
    while(prop = paths.shift()){
        res = res[prop]
    }
    return res
}


/**
 * parseVNode 将vnode 转化为 真实 dom
 * @param {Object} vnode 
 */
function parseVNode(vnode){
    let type  = vnode.type,_vnode ;
    if(type==3){
        _vnode  = document.createTextNode(vnode.value)
    }else if(type == 1){
        _vnode = document.createElement(vnode.tag);
        let attrs = vnode.data;
        Object.keys(attrs).forEach(attr=>{
            _vnode.setAttribute(attr,attrs[attr])
        })
        vnode.children.forEach(subChild=>{
            _vnode.appendChild(parseVNode(subChild))
        })
    }
    return _vnode
}