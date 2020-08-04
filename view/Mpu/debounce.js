/**
 * debounce防抖: 在事件被触发n秒后去执行 回调函数,如果在n秒内事件又被触发，则重新开始计时
 * 
 * 实际应用场景 监听文本框的内容，只会在输入内容之后才去请求数据，减少请求，优化性能
 *              
 * 
 * 
 * 用一句话总结防抖和节流的区别：防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行
*/


// <input type="text" name="debounce" id="debounce"> 

let dom = document.querySelector('#debounce')
dom.addEventListener('keyup',function(e){
    debounceAjax(e.target.value)
})

let debounceAjax = debounce(ajax,3000);
function ajax(args) {
    console.log('参数为'+args,'开始ajax请求数据-----')
}

/**
 *@param Function fn 延时调用函数
 *@param Number delay 延时多少秒
*/
function debounce(fn,delay){
    var timer = null;
    return function(args){
        clearTimeout(timer)
        timer=setTimeout(function(){
            fn(args)
        },delay)
    }
}
