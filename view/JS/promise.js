/**
 * promiseA+
 * 1 pending -> fulfilled | rejected
 * 2 then 返回一个promise;then链式调用(下一个要拿到上一个的返回值，要按照顺序执行) 要处理 promise/非promise得情况
 * 3 then 如果接受的不是一个函数，需要忽略并继续执行
 */

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result')
    }, 1000)
})

p.then(data => {
    console.log(data)
})


/**
 * 上述promise大致流程
 * 1 new Promise(executor),executor(处理器函数) 接受resolve和reject两个函数,并且立即执行 executor函数
 * 2 executor函数内部的异步任务被 放入 宏/微任务队列中
 * 3 then函数被执行，收集成功/失败的回调函数
 * 4 executor的异步任务被执行，触发resolve/reject,执行成功/失败的回调函数
 * 
 * 
 * 
 * 观察者模式
 * then收集依赖->异步触发resolve->resolve触发依赖
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(excutor) {
        this._status = PENDING
        this._value = null
        this._resolveQueue = []
        this._rejectQueue = []
        let _resolve = data => {
            if (this._status !== PENDING) return
            this._status = FULFILLED
            this._value = data
            while (this._resolveQueue.length) {
                const callback = this._resolveQueue.shift()
                callback(data)
            }
        }
        let _reject = data => {
            if (this._status !== PENDING) return
            this._status = REJECTED
            this._value = data
            while (this._rejectQueue.length) {
                const callback = this._rejectQueue.shift()
                callback(data)
            }
        }
        excutor(_resolve, _reject)
    }
    then(resolveFn, rejectFn) {
        if (typeof resolveFn !== 'function') {
            resolveFn = data => data
        }
        if (typeof rejectFn !== 'function') {
            resolveFn = data => {
                throw new Error(data)
            }
        }
        // this._resolveQueue.push(resolveFn)
        // this._rejectQueue.push(rejectFn)
        return new MyPromise((resolve, reject) => {
            const _resolveFn = data => {
                let x = resolveFn(data)
                x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
            }
            const _rejectFn = data => {
                try {
                    let x = rejectFn(data)
                    x instanceof MyPromise ? x.then(resolve, reject) : reject(x)
                } catch (error) {
                    reject(error)
                }
            }
            switch (this._status) {
                case 'PENDING':
                    this._resolveQueue.push(_resolveFn)
                    this._rejectQueue.push(_rejectFn)
                    break
                case 'FULFILLED':
                    _resolveFn(this._value)
                    break
                case 'REJECTED':
                    _rejectFn(this._value)
                    break
            }

        })
    }
}

/**
 * 
 const p1 = new MyPromise((resolve, reject) => {
  resolve(1)          //同步executor测试
})

p1
  .then(res => {
    console.log(res)
    return 2          //链式调用测试
  })
  .then()             //值穿透测试
  .then(res => {
    console.log(res)
    return new MyPromise((resolve, reject) => {
      resolve(3)      //返回Promise测试
    })
  })
  .then(res => {
    console.log(res)
    throw new Error('reject测试')   //reject测试
  })
  .then(() => {}, err => {
    console.log(err)
  })
 */