
 [[Prototype]]  对象的一个内置属性


__proto__ （隐式原型、笨蛋 proto）

    Object.defineProperty(Object.prototype,"_proto_",{
        get:function(){
            return Object.getPrototypeOf(this)  //返回指定对象的原型
        },
        set:function(o){
            Object.setProtypeOf(this,o)   //设置一个指定的对象的原型 到另一个对象或  null
            return o
        }
    })
let obj = new Object(); //{}

（1）(实例)对象的_proto_属性,它指向构造函数的原型对象(prototype)。 obj._proto_ === Object.prototype;

当我们访问一个对象上的某个属性时，它会检查该对象是否有这个属性，如果有就使用它。如果没有，就会继续访问对象的原型，以及该对象的原型的原型，依次层层向上寻找，直到找到这个属性或者到达原型链的末尾(null)。如果找不到属性就返回undefined。

var o = {a: 1};
// 原型链如下 o -->Objct.prototype -->null




prototype 是 函数独有属性

    function Person (name){
        this.name = name
    }
    Person.prototype.say =function(){
        console.log(this.name)
    }
    var person1 = new Person();
（1）函数的prototype属性，它指向 函数的 原型对象。  
（2）构造函数的原型对象的constructor指向构造函数本身。 Person.prototype.constructor === Person
 (3) 对象的_proto_属性,它指向构造函数的原型对象(prototype)。 person1.__proto__ === Person.prototype






                          prorotype                                     __proto__                                   __proto__
                     ---------------->                               -------------->                             -------------> null
Person(构造函数)                         Person.prototype(原型对象)                     Object.prototype(原型对象)                  
                     <----------------                                                                           --------------> Object                                     constructor                                                                                constructor
           __porto__          
person1 ----------------->    Person.prototype(原型对象)                         







    
