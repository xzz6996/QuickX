// 浅拷贝 Object.assign() [].slice() 

// 深拷贝
function deepCopy(data) {
    if (!data || typeof data !== 'object') return
    let cdata = Array.isArray(data) ? [] : {}
    for (var i in data) {
        if (data.hasOwnProperty(i)) {
            cdata[i] = typeof data[i] === 'object' ? deepCopy(data[i]) : data[i]
        }
    }
    return cdata
}