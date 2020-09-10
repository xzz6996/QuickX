JVue.prototype.initData = function () {
    observe(this._data);
    Object.keys(this._data).forEach(key => {
        proxy(this, '_data', key)
    })
}
/**
 * observe 数据响应化
 * @param {Object} data 
 */
function observe(data) {
    if (!data) return
    if (Array.isArray(data)) {
        data.__proto__ = arr_method;
        data.forEach(item => {
            observe(item)
        })
    } else {
        if (typeof data === "object" && data != null) {
            Object.keys(data).forEach(key => {
                defineReactive(data, key, data[key])
            })
        }
    }
}

/**
 * defineReactive 数据响应式化
 * @param {Object|Array} data 
 * @param {*} prop 
 * @param {*} value 
 */
function defineReactive(data, prop, value) {
    if (typeof value === 'object' && value != null) {
        observe(value)
    }
    Object.defineProperty(data, prop, {
        get() {
            return value
        },
        set(newVal) {
            value = newVal
        }
    })
}

// 函数扩展、拦截
let arr_method = Object.create(Array.prototype);
let Arr_Mthods = ['pop', 'push', 'unshift', 'shift', 'reserve'];
Arr_Mthods.forEach(method => {
    arr_method[method] = function () {
        for (var i = 0; i < arguments.length; i++) {
            observe(arguments[i])
        }
        Array.prototype[method].apply(this, arguments);
    }
})




/**
 * proxy 代理 vm.name ---> vm._data.name
 * @param {Object} target 
 * @param {String} souceKey 
 * @param {String} key 
 */
function proxy(target, souceKey, key) {
    Object.defineProperty(target, key, {
        get() {
            return target[souceKey][key];
        },
        set(newVal) {
            target[souceKey][key] = newVal;
        }
    })
}