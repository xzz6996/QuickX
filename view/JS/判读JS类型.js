// typeof
typeof "333"   //string
typeof 33      //number 
typeof true   //boolean
typeof undefined //undefined
typeof function () { } === 'function';

typeof [5, 6, 7] //object 
typeof { a: 5 }   //object
typeof null    //object


//instanceof 检测构造函数的prototype属性是否出现在某个实例对象的原型链上

"321" instanceof String //false
new String("321") instanceof String //true


//Object.prototype.toString.call()

Object.prototype.toString()  //返回 "[object type]" type是对象的类型


Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call("123");// "[object String]"
Object.prototype.toString.call(123);// "[object Number]"
Object.prototype.toString.call(true);// "[object Boolean]"