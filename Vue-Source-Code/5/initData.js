/**
 * 代理 ： vm.name -- > vm._data.name
 * @param {Object} target 
 * @param {Object} prop 
 * @param {String} key 
 */
function proxy(target, prop, key) {
    //(实例vm,'_data',属性) (实例vm,'_properties',属性)
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get() {
            return target[prop][key]
        },
        set(newVal) {
            target[prop][key] = newVal;
        }
    })
}
/**
 * 将数据 进行 响应式化
 * @param {Object} target 
 * @param {String} key 
 * @param {*} value 
 * @param {Boolean} enumerable 
 */
function defineReactive(target, key, value, enumerable) {

    if (typeof value === "object" && value != null) {
        observe(value)
    }
    let dep = new Dep();
    Object.defineProperty(target, key, {
        get() {
            //依赖收集
            return value;
        },
        set(newVal) {
            if (typeof newVal === "object" && newVal != null) {
                observe(newVal);
            }
            value = newVal;
            
            dep.notify(); // 派发更新

            //重新渲染 暂时 JVue.mountComponent()
        }
    })
}

/**
 * 将数据 进行 响应式化，递归处理
 * @param {Object} obj 
 */
function observe(obj) {
    if (Array.isArray(obj)) {
        obj.__proto__ = arr_methods;
        for (let i = 0; i < obj.length; i++) {
            observe(obj[i])
        }
    } else {
        if (typeof obj === "object" && obj != null) {
            let keys = Object.keys(obj);
            for (let i = 0; i < keys.length; i++) {
                let prop = keys[i];
                let value = obj[prop];
                defineReactive(obj, prop, value, true)
            }
        }
    }
}



// function reactify(o) {
//     let keys = Object.keys(o);
//     //keys 属性
//     for (let i = 0; i < keys.length; i++) {
//         let key = keys[i];
//         let value = o[key]
//         if (Array.isArray(value)) {
//             value.__proto__ = arr_methods;
//             for (let j = 0; j < value.length; j++) {
//                 reactify(value[j])
//             }
//         } else {
//             //非数组的引用类型
//             if (typeof value === "object" && value !== null) {
//                 reactify(value)
//             } else {
//                 defineReactive(o, key, value, true)
//             }
//         }
//     }
// }


let arr_methods = Object.create(Array.prototype);
let Arr_Method = ['push', 'pop', 'shift', 'unshift'];
Arr_Method.forEach(method => {
    arr_methods[method] = function () {
        // 将数据进行响应式化
        for (let i = 0; i < arguments.length; i++) {
            observe(arguments[i]); // 这里还是有一个问题, 在引入 Watcher 后解决
        }
        return Array.prototype[method].apply(this, arguments)
    }
})


JVue.prototype.initData = function () {
    observe(this._data); //将数据进行响应式转化

    Object.keys(this._data).forEach(key => {
        proxy(this, '_data', key);//将直接属性进行代理 vm.name -->映射 vm.data.name
    })
}
