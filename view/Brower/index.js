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