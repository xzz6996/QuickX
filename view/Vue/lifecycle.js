vue生命周期？

--- vue实例从创建到销毁的过程。 从开始创建，初始化数据，编译模版，挂载dom、渲染，更新、渲染，销毁等一系列过程。

作用？
--- 生命周期里有多个事件钩子，让我们在控制整个vue实例时形成更好的逻辑。

生命周期几个阶段？ 8个
    beforeCreate ： 数据观测(data observer)和初始化事件(event watcher)未开始
    created      ： 完成数据观测，属性和方法的运算，开始初始化事件，但此时 $el属性不可见  
    brforeMounte ： 在挂载之前被调用，相关的render函数首次被调用。实例已完成 编译模版--把data里的数据和模版生成html，但此时还未挂载html到页面上。
    mounted      ：el被新创建的vm.$el替换，用编译好的html替换el属性指向的dom。完成模版中的html渲染到页面上。
    brforeUpdate ： 在数据更新之前调用，发生在虚拟dom重新渲染和打补丁时，
    update       ： 由于数据更改导致虚拟dom重新渲染和打补丁后调用
    beforeDestroy：在实例销毁之前调用。
    destroyed    ：所有的事件监听被移除，所有的子实例被销毁，

第一次加载会触发哪几个钩子？
--- brforeCreate、created、beforeMounte、mounted

DOM 渲染在 哪个周期中就已经完成？
--- mounted
