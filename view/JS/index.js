/*
ES6模块与CommonJS差异
    CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
    CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
*/
/*    
深浅拷贝

JS类型分为 基本数据类型、引用数据类型。

基本数据类型(String,Number,Boolean,Null,Undefined,Symbol)
    复制 ： 在栈中开辟一个新的内存 

引用数据类型(Object,Array,Date,Function,RegExp)
    引用保存在栈中，值保存在 堆中。
    复制 ：复制了 指向该对象的指针

*/

/*
    浅拷贝
*/
Object.assign() //多层就是浅拷贝，一层就是深拷贝

Array.protptype.slice()
Array.prototype.concat()



/*
    深拷贝
*/
JSON.parse(JSON.stringify());

$extend(true, target, ...object1)


function deepClone(data, hash = new WeakMap) {
    // 值为null,则返回
    if (data === null) {
        return
    }
    // 判断 '不常用的' 引用数据类型,并返回
    const type = ['Date', 'RegEpx', 'Set', 'WeakSet', 'Map', 'WeakMap'];

    if (type.includes(data.constructor)) { // FilterType(data)
        return new data.constructor(data)
    }

    // 不是 object类型的就 return
    if (typeof data !== 'object') {
        return data
    }

    // 避免成环
    if (hash.has(data)) {
        return hash.get(data);
    }


    let result = new data.constructor();

    hash.set(data, result)

    for (var i in data) {
        if (data.hasOwnProperty(i)) {
            result[i] = deepClone(data[i], hash)
        }
    }
    return result
}


function FilterType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

/*
事件传播
    捕获阶段、(Netspace很少有人使用 document->html->body->div->span) 目标元素向下传播
    目标阶段、
    冒泡阶段(IE span->div->body->html->document) 目标元素向上传播

事件阻止 event.stopPropagation() || e.cancleBubble =true  ||return false

阻止默认行为 event.preventDefault()

事件委派 (将事件统一绑定给共同的祖先元素，减少事件绑定的次数，提供程序的性能)
*/