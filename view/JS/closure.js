// 参考 你不知道的js

// 作用域（负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。） 简单理解：作用域是根据名称查找变量的一套规则。

// 作用域嵌套：当一个块或者一个函数 嵌套在另一个块或者函数里时，就发生了作用域的嵌套。 因此在当前作用域中 无法查找到某个变量的时候，引擎就会在外层嵌套的作用域中去寻找，直到找到该变量或者抵达最外层的作用域（即全局作用域）为止。遍历嵌套作用域链的规则很简单：引擎从当前的执行作用域开始查找变量，如果找不到， 就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都 会停止。

//查找: 作用域查找会在找到第一个匹配的标识符时停止。

// 作用域的 工作模型 分为 词法作用域、动态作用域。

// 词法作用域: 定义在词法阶段的作用域。(在写代码时将变量和块作用域写在哪里来决定)
词法（lexical）一词指的是，词法作用域根据源代码中声明变量的位置来确定该变量在何处可用

// 闭包 ： 基于词法作用域书写代码时所产生的自然结果。（由函数以及声明该函数的词法环境组合而成的）
// 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用 域之外执行








var c ="0";
function A(){
    var a ="1";
    console.log(c) //"0"
    function B(){
        var b ="2";
        console.log(c) //"0"
        console.log(a) //"1"
    }
}
链式作用域: 子对象会一级一级的向上寻找父对象的变量。父对象的变量对子对象可见，反之 不成立。



 
// v8 垃圾回收
// 变量提升


function foo(x) {
    var tmp = 3;
    return function f2(y) {
        alert(x + y + (++tmp));
    };
}
var bar = foo(3); // bar 现在是一个闭包
bar(10);



/*-------- */


{/* <button class="btn">按钮</button>
<button class="btn">按钮</button>
<button class="btn">按钮</button> */}

var btn = document.getElementsByClassName("btn");
for (var i = 0, length = btn.length; i < length; i++) {
    (function (x) {
        btn[i].onclick = function () {
            alert(x);
        }
    })(i)
}



/*-------- */


function fun(n, o) {
    console.log(o)
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
var a = fun(0); a.fun(1); a.fun(2); a.fun(3);//undefined,?,?,?
var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
var c = fun(0).fun(1); c.fun(2); c.fun(3);//undefined,?,?,?
