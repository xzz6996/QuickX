// typeof 
typeof "333"   //"string"
typeof 33      //"number" 
typeof true   //"boolean"
typeof undefined //"undefined"

typeof function () {}  //function

typeof []   //object 
typeof {}   //object
typeof null // "object"


//instanceof 检测构造函数的prototype属性是否出现在某个实例对象的原型链上
function C(){}
function D(){}

var o = new C()

o instanceof C //true
o instanceof D //false

"321" instanceof String //false
new String("321") instanceof String //true




//Object.prototype.toString.call()

Object.prototype.toString()  //返回 "[object type]" type是对象的类型


Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call("123");// "[object String]"
Object.prototype.toString.call(123);// "[object Number]"
Object.prototype.toString.call(true);// "[object Boolean]"
Object.prototype.toString.call([223]); // "[Object Array]"
Object.prototype.toString.call({}); // "[Object Object]"



//constructor   不支持null undefined

var a = "1"; a.constructor === String
var a = 1;   a.constructor === Number
var a = true; a.constructor === Boolean
var a = {};   a.constructor === Object
var a = [];  a.constructor === Array


