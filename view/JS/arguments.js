arguments 是一个传递给函数参数的类数组对象

function func1(a, b, c) {
  console.log(arguments); // object {0: 1, 1: 2, 2: 3}
}
func1(1, 2, 3);


转化为一个真正的数组
Array.from(arguments)
Array.prototype.slice.call(arguments)
[...arguments]


//属性
arguments.callee 指向参数所指的当前执行的函数
arguments.length 传递给函数的参数数量
arguments[@@iterator] 


//例子

遍历求和
function add(){
    var sum = 0
    for(var i= 0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}
add(1) 
add(1,2,3)


定义连接字符串的函数
/**
 * 
 * @param {String} separator  // , ; 
 */
function concatString(separator){
    let arr = Array.prototype.slice.call(arguments,1)
    return arr.join(separator)
}
concatString(',','1111','2222') // 1111,2222
concatString(';','1111','2222') // 1111;2222