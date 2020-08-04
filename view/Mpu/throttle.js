
// 在浏览器 DOM 事件里面，有一些事件会随着用户的操作不间断触发。比如：重新调整浏览器窗口大小（resize），浏览器页面滚动（scroll），鼠标移动（mousemove）。也就是说用户在触发这些浏览器操作的时候，如果脚本里面绑定了对应的事件处理方法，这个方法就不停的触发，会造成性能的损失。所以我们可以通过在事件里加上 延迟处理的逻辑来优化性能。


var timer = null;  //多了一个全局变量
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(function() {
        testFn();
    }, 100);
};


/**
 * throttle函数节流方法
 * @param Function fn 延时调用函数
 * @param Number delay 延迟多长时间
 * @return Function 延迟执行的方法
 */
function throttle(fn, delay) {
    var timer = null;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn()
        }, delay)
    }
}
window.onresize = throttle(testFn, 100)
/*如果用户 不断的 resize 浏览器窗口大小，这时延迟处理函数一次都不会执行 */




/*当用户触发 resize 的时候应该 在某段时间 内至少触发一次*/
/**
 * 函数节流方法
 * @param Function fn 延时调用函数
 * @param Number delay 延迟多长时间
 * @param Number atleast 至少多长时间触发一次
 * @return Function 延迟执行的方法
 */
function throttle(fn, delay, atleast) {
    var timer = null;
    var perious = null;
    return function () {
        var data = +new Date(); //时间戳

        if (!perious) perious = data

        if (atleast &&data - perious > atleast) {
            perious = null;
            fn()
        } else {

            clearTimeout(timer)
            timer = setTimeout(function () {
                fn()
            }, delay)
        }
    }
}

window.onresize = throttle(testFn, 100, 500)















