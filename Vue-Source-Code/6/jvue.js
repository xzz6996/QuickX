function JVue(options) {
    this._options = options;
    this._el = options.el;
    this._data = options.data;
    let dom = document.querySelector(options.el);
    this._template = dom;
    this._parent = dom.parentNode;

    this.initData(); //初始化
    this.mount(); //挂载
}