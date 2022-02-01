Object.defineProperty(object, prop, descriptor)
//该方法会直接在一个对象上定义一个新属性，或者修个对象的现有属性，并返回此对象。
// object 要定义的属性 prop要定义或者修改的属性名称或Symbol  descriptor 要定义或者修改的属性描述符


const obj = {};
Object.defaultProperty(obj, 'a', {
    value: 42,
    writable: false
})
obj.a = "2252"; // 抛出错误
console.log(obj.a)  // 42



const obj1 = {}
Object.defineProperty(obj1, 'aaa', {
    get() {
        return ''
    },
    set(value) {
        return value
    }
})




descriptor  // 数据描述符和存取描述符 两者不可同时存在
1 数据描述符(value, writable)
2 存取描述符(get, set)

共同拥有的描述符(configurable, enumerable)



介绍
configurable 该属性是否 能被修改
enumerable   该属性是否 能被枚举

value        该属性 对应的值
writable     该属性的值 是否能被 修改

get          属性的getter函数
set          属性的setter函数



