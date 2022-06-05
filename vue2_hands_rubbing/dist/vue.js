(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  // 我们希望重写数组中的部分方法
  var oldArrayProto = Array.prototype; // Array.prototype.push = function (){}  // 会被直接覆盖，Bad
  // 拷贝 一份新的出来
  // newArrayProto.__proto__ = oldArrayProto

  var newArrayProto = Object.create(oldArrayProto); // newArrayProto.push = function(){}
  // 找到所有的变异方法

  var methods = ['push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice'];
  methods.forEach(function (method) {
    // 重写数组的方法
    newArrayProto[method] = function () {
      var _oldArrayProto$method;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // 内部调用原来的方法， 函数的劫持， 切片编程
      var result = (_oldArrayProto$method = oldArrayProto[method]).call.apply(_oldArrayProto$method, [this].concat(args)); // 我们需要对新增的 数据 再次进行劫持


      var inserted;
      var ob = this.__ob__;

      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;

        case 'splice':
          inserted = args.slice(2);
      }

      console.log({
        inserted: inserted
      });

      if (inserted) {
        // 对新增内容 再次进行观测

        /*
        需要用到 对数组的观测方法，考虑 从 this (data) 上引入
        定义 自定义属性 data.__ob__，使得我们可以使用 Observe 上
        的 数组观测方法
        */
        ob.observeArray(inserted);
      }

      return result;
    };
  });

  var Observe = /*#__PURE__*/function () {
    function Observe(data) {
      _classCallCheck(this, Observe);

      // Object.defineProperty  只能劫持 已经存在的属性，增加的 删除的 都不会被劫持 （增加$set. $delete）
      // data.__ob__ = this // 给数据加一个标识，如果数据上有 __ob__ 则说明这个属性被观测到了
      Object.defineProperty(data, '__ob__', {
        value: this,
        enumerable: false // 将 __ob__ 变成不可枚举（循环的时候无法获取到）

      });

      if (Array.isArray(data)) {
        // 重写 7个数组 变异方法（会修改数组本身的方法）
        data.__proto__ = newArrayProto;
        this.observeArray(data);
      } else {
        this.walk(data);
      } // this.walk(data)

    }

    _createClass(Observe, [{
      key: "walk",
      value: function walk(data) {
        // 循环对象 对属性 依次劫持
        Object.keys(data).forEach(function (key) {
          // Object.defineProperty(data, data[key],{})
          // ”重新定义“ 属性
          defineReactive(data, key, data[key]);
        });
      }
    }, {
      key: "observeArray",
      value: function observeArray(data) {
        data.forEach(function (item) {
          return observe(item);
        });
      }
    }]);

    return Observe;
  }();

  function defineReactive(target, key, value) {
    // Object.defineProperty(data, data[key],{})
    if (arguments.length == 2) value = target[key];
    observe(value);
    Object.defineProperty(target, key, {
      get: function get() {
        console.log('用户取值了');
        return value;
      },
      set: function set(newValue) {
        console.log('用户设置值了');
        if (newValue === value) return;
        observe(newValue);
        value = newValue;
      }
    });
  }
  function observe(data) {
    // 对data对象进行劫持
    if (_typeof(data) !== 'object' || data == null) return; // 如果 一个对象 被劫持过了，那就不需要再 劫持了，
    // 判断对象是否被劫持， 增加了一个实例 来判断

    if (data.__ob__ instanceof Observe) {
      return data.__ob__;
    }

    return new Observe(data);
  }

  function initState(vm) {
    // 获取所有的选项
    var opts = vm.$options;

    if (opts.data) {
      initData(vm);
    }
  }

  function proxy(vm, target, key) {
    Object.defineProperty(vm, key, {
      get: function get() {
        return vm[target][key];
      },
      set: function set(newValue) {
        vm[target][key] = newValue;
      }
    });
  }

  function initData(vm) {
    var data = vm.$options.data; // data可能是函数或者对象

    data = typeof data === 'function' ? data.call(vm) : data;
    vm._data = data; // 对数据进行劫持 Object.defineProperty

    observe(data); // 将 vm._data 用vm来代理

    for (var key in data) {
      proxy(vm, '_data', key);
    }
  }

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      vm.$options = options; // 初始化状态

      initState(vm);

      if (options.el) {
        vm.$mount(options.el);
      }
    };

    Vue.prototype.$mount = function (el) {
      console.log({
        el: el
      });
      var vm = this;
      el = document.querySelector(el);
      console.log(2, {
        el: el
      });
      var opts = vm.$options;

      if (!opts.render) {
        // 先查找有没有render函数
        var template; // 没有render 看一下 是否写了 template ，没有写template 采用外部的template

        if (!opts.template && el) {
          template = el.outerHTML;
        } else {
          if (el) {
            // 如果有el 则采用模板的内容
            template = opts.template;
          }
        }

        console.log({
          template: template
        });
      }
    };
  }

  function Vue(options) {
    this._init(options);
  }

  initMixin(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map
