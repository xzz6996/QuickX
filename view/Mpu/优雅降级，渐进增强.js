/*
渐进增强 Progressive Enhancement

一开始针对低版本的浏览器构建页面，满足最基本的功能，再针对高级浏 览器进行效果，交互，追加各种功能以达到更好用户体验,换句话说，就是以最低要求，实现最基础功能为基本，向上兼容。

.transition {
    -webkit-transition : all 0.5s;
    -moz-transition    : all 0.5s;
    -o-transition      : all 0.5s;
    transition         : all 0.5s;
}




优雅降级 Graceful Degradation
优雅降级指的是一开始针对一个高版本的浏览器构建页面，先完善所有的功能。然后针对各个不同的浏览器进行测试，修复，保证低级浏览器也有基本功能 。也就是以高要求，高版本为基准，向下兼容。


.transition {
    transition         : all 0.5s;
    -o-transition      : all 0.5s;
    -moz-transition    : all 0.5s;
    -webkit-transition : all 0.5s; 
}








*/