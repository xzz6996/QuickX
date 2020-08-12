ES6模块与CommonJS差异
    //CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
    //CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

深浅拷贝


事件传播
    捕获阶段、(Netspace很少有人使用 document->html->body->div->span) 目标元素向下传播
    目标阶段、
    冒泡阶段(IE span->div->body->html->document) 目标元素向上传播

事件阻止 event.stopPropagation() || e.cancleBubble =true  ||return false

阻止默认行为 event.preventDefault()

事件委派 (将事件统一绑定给共同的祖先元素，减少事件绑定的次数，提供程序的性能)



