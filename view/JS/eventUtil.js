const eventUtil = {
    /**
     * 
     * @param {*} e  window element
     * @param {String} type  click dbclick 
     * @param {Function} handler 
     */
    // 添加监听
    addListen(e, type, handler) {
        if (e.addEventListener) {
            e.addEventListener(type, handler, false)
        } else if (e.attchEvent) {
            e.attchEvent("on" + type, handler)
        } else {
            e["on" + type] = handler
        }
    },
    // 移除监听
    removeListen(e, type, handler) {
        if (e.addEventListener) {
            e.removeEventListener(type, handler, false)
        } else if (e.attchEvent) {
            e.detachEvent("on" + type, handler)
        } else {
            e["on" + type] = null
        }
    },
    // 获取事件目标
    getTarget(e) {
        return e.target || e.srcElement
    },
    // 获取事件
    getEvent(event) {
        return event || window.event
    },
    // 阻止冒泡事件
    stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation()
        } else {
            e.cancelBubble()
        }
    },
    // 取消事件的默认行为
    preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault()
        } else {
            e.returnValue = false
        }
    }
}