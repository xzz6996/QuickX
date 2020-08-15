// rem、em、vh、vw 和 px 的关系，以及移动端适配方式

绝对单位
    px      页面按精确像素展示


相对长度单位
    rem    root em  相对于HTML的字体
    适配原理是：根据不同屏幕的宽度，以相同的比例动态修改html的font-size适配，并将px替换成rem，它可以很好的根据根元素的字体大小来进行变化，从而达到各种屏幕基本一直的效果体验。

    em     相对于父节点字体,如果父节点字体没有设置，则相对于 浏览器的默认字体16px
    vh,vw   相对于 相对视口（viewport）
