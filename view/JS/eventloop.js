//参考http://www.ruanyifeng.com/blog/2014/10/event-loop.html

JavaScript就是单线程。单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。



所有任务 分为
1 同步(synchronous)

2 异步(asynchronous)


所有任务进入执行栈中，同步直接进入主线程执行，异步任务 进入Event Table，并注册一个回调函数 放进 Event Queue中。

js引擎的monitoring process进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会读取Event Queue中对应函数，放进主线程执行。

以上过程不断循环执行，这整个运行机制 称为Event Loop（事件循环）





任务队列存在多个, 微任务队列、宏任务队列。

当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件, 然后再去宏任务队列中取出一个事件。同一次事件循环中, 微任务永远在宏任务之前执行。


队列分为两种类型：macro - task(微任务) 和micro Task(宏任务) 。我们举例来看执行顺序的规定， 我们设

macro - task队列包含任务：a 1， a 2， a 3

micro - task队列包含任务：b 1， b 2， b 3

执行顺序为， 首先执行marco - task队列开头的任务， 也就是a 1任务， 执行完毕后， 在执行micro - task队列里的所有任务，

也就是依次执行b 1， b 2， b 3， 执行完后清空micro - task中的任务， 接着执行marco - task中的第二个任务， 依次循环。

在nodeV 8中， 这两种类型的真实任务顺序如下所示：

macro - task队列真实包含任务：

script(主程序代码) ， setTimeout， setInterval， set Immediate， I / O， UI rendering

micro - task队列真实包含任务：

process.next Tick， Promises， Object.observe， Mutation Observer

由此我们得到的执行顺序应该为：

script(主程序代码) 一 > process.next Tick -> Promises...——> setTimeout——> setInterval——> set Immediate—

I / O——> UI rendering

在ES 6中macro - task队列又称为Script Jobs， 而micro - task又称Promise Jo





宏任务 macrotask(script、setTimeout、setInterval、setImmediate、I/O、UI rendering)


微任务 microtask(Nodejs--process.nextTick() 、es6--Promise.then() 、html5--MutationObserver)



