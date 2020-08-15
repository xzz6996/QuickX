MVC
  M model(模型)         定义数据模型，实现业务逻辑，当数据发生变化时，通过事件通知View来更新。
  V view(视图)          界面视图，能从Model获取数据。
  C controller(控制器)  响应用户的界面交互操，能调用Model执行业务逻辑。
  
在view上触发事件，传递到controller，controller处理了业务，然后把数据传递给model，model把数据带给view，view更新数据与页面。


MVVM 
  M model(模型)         定义数据模型，实现业务逻辑，当Model数据发生变化时，通过事件通知ViewModel数据更新。
  V view(视图)          响应用户的界面交互操作请求，然后将请求转给ViewModel执行。
  VM viewmodel          处理 model和view的交互，负责业务逻辑（能接受View的请求，操作View以及调用Model执行业务逻辑，ViewModel的数据跟View关联，当ViewModel数据变化后，自动更新对应的View的界面视图。）
    
  view <--> viewmodel <-->model 
  
  model和view之间没有交互，但是 view和viewmodel是双向绑定的，model和viewmodel也是双向绑定的。
  Model数据变化后通知对应的ViewModel数据更新
  用户的操作交互响应通过View转发给ViewModel（DOM节点自动绑定事件）
  ViewModel数据变化后通知对应的View更新界面视图（界面自动绑定数据）

