常见浏览器及其内核    
    浏览器              内核
    IE                  Edge
    Firefox             Gecko
    Safari/chrome       Webkit 

从 url 到页面显示
    1 dns域名解析，获取相应的ip
    2 浏览器和服务器通过3次握手,建立tcp连接
    3 浏览器向服务器发送http协议
    4 服务器收到请求，返回资源 与 http相应
    5 浏览器接受相应，下载资源，解析dom树
    6 关闭ycp连接 或者 继续保持连接(4次握手)      

同源
    指的是三个相同 :协议，域名，端口
    http ://www.example.com/dir/page2.html
    协议(http)  域名(www.example.com) 端口80(默认端口可以省略)
同源目的
    是为了保证用户信息的安全，防止恶意的网站窃取数据。

非同源，共有三种行为受到限制。
    （1） Cookie、LocalStorage 和 IndexDB 无法读取。
    （2） DOM 无法获得。
    （3） AJAX 请求不能发送。


跨域
    （1） JSONP -- 网页通过添加一个script元素，向服务器发送请求，服务器接收后放在一个指定名字的回调函数传回来
        
        var script = document.createElement('script');
        script.type = 'text/javascript';
        
        // 传参并指定回调执行函数为onBack
        script.src = 'http://www.....:8080/login?user=admin&callback=onBack';
        document.head.appendChild(script);
        
        // 回调执行函数
        function onBack(res) {
            alert(JSON.stringify(res));
        }
    （2） Nginx 反向代理
    （3） CORS
     (4) $.ajax()  dataType:"jsonp" 
     // jsonp 字段含义为服务器通过什么字段获取回调函数的名称
     jsonp: 'callback',
     // 声明本地回调函数的名称，jquery 默认随机生成一个函数名称
     jsonpCallback: 'jsonpCallback'
     
     (5) axios 
        header(“Access-Control-Allow-Origin:*”)   
        "/api":{ 
            target: 'http://192.168.3.6:7777', 
            changeOrigin: true,
            pathRewrite:{'^/api':''}
        }

        