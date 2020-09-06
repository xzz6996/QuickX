class VNode {
    constructor(tag, data, value, type) {
        this.tag = tag && tag.toLowerCase(); //标签名 div,p
        this.data = data; // {} 属性
        this.value = value; //文本值
        this.type = type;  //类型
        this.children = [];
    }
    appendChild(vnode) {
        this.children.push(vnode)
    }
}