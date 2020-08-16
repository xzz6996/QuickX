参考 你不知道的js

this 既不指向函数自身也不指向函数的词法作用域，你也许被 这样的解释误导过，但其实它们都是错误的。
this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

调用位置：调用位置就是函数在代码中被调用的 位置（而不是声明的位置）



/*默认绑定 普通函数全局调用、settimeout全局调用、立即执行函数等 this 指向全局对象---------------------- */
function wFun(){
    console.log('普通函数内的 this指向window',this)
}
wFun()

setTimeout(function(){
    console.log('setTimeout内的 this指向window',this)
},100)

// (function(){
//     console.log('立即执行函数内的 this指向window',this)
// })()


/*隐式绑定 作为对象的方法调用 this代表该对象---------------------- */

let obj ={
    aaa:"333",
    aFun:function(){
        console.log('作为对象的方法调用 this代表该对象',this)
    }
}
obj.aFun()



/*new绑定 this代表实例对象----------*-------------*/

function parent(){
    this.x = 100;
}
let child = new parent();
console.log('构造函数的调用,this代表实列对象',child)




/*显式绑定 call apply bind  this代表要绑定的参数---------------------- */


function A(){ 
    console.log('apply事件绑定的调用,this代表apply传入的第一个参数',this)
}
let B ={xxx:"333"}

A.apply(B)



function C(){ 
    console.log('call事件绑定的调用,this代表call传入的第一个参数',this)
}
let D ={
    xxx:"ddd"
}
C.call(D)



//第一个参数表示: 改变后调用函数的this。但是如果参数为空，则this代表window

// fn.call(thisArg,Arg1,Arg2,...) 第二个参数是 多个参数
//适用于继承

// fn.apply(thisArg,[...Arg1])    第二个参数是 一个包含多个参数的数组
//适用于数组，比如 Math.max.apply(Math,[5,6,8])





//fn.bind(thisArg,Arg1,Arg2,...)
//不会主动调用函数,但是会改变this指向






