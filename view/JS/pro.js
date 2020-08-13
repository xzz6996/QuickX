// prototype和 __proto__
// 继承

__proto__

（1）对象都会有一个_proto_属性，它指向构造函数的prototype (原型对象)。
        var a = { b: 3};
        a._proto_ 指向 ---> Object.prototype; 


prototype

（1）每一个构造函数都有一个prototype属性，它指向 原型对象 
    function parent (name){
        this.name = name
    }
    parent.prototype.say =function(){
        console.log(this.name)
    }
    