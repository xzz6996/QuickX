/**
 * VNode 生成vnode
 */
class VNode {
    constructor(tag, data, type, value) {
        this.tag = tag?tag.toLowerCase():null;     //标签名
        this.data = data;   //属性
        this.type = type;   //类型
        this.value = value; //值
        this.children = []; //子
    }
    appendChild(data) {
        this.children.push(data)
    }
}