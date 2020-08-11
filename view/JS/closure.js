// 作用域
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