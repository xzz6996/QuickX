Proxy(target,handler)
// 对象创建一个对象的代理，从而实现基本操作的拦截和自定义(如属性查找、赋值、枚举、函数调用等)
// target 目标对象(可以是任何类型的对象，包括原生对象，函数，甚至另一个代理)
// handler 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理对象的行为。

const obj = {
    a: 1,
    b: 2
}
let test = new Proxy(obj,{
    get(target,property){
        return property in target?target[property] : 0
    },
    set(target,property,value){
        return target[property] = "被代理了"
    },
    has(target,prop){
        if(prop == "b"){
           target[prop] = "in 被代理了" 
        }
        return prop in target
    }
})

console.log(test.a) // 1
console.log(test.b) // 2
console.log(test.c) // 0 

test.ddd = "555";
console.log(test.ddd) // 被代理了

if("a" in test){
    console.log(test)  // Proxy {}
}


handler包含
    get(target,property,receiver)       //拦截对象的读取属性操作
    set(target,property,value,receiver) //设置属性值操作的捕获器
    has(target,prop)                    //针对in操作符的代理方法
    getPrototypeOf()  代理 --> Object.getPrototypeOf() //返回对象的原型
    setPrototypeOf()  代理 --> Object.setProptotypeOf()
    defineProperty()  代理 --> Object.defineProperty()