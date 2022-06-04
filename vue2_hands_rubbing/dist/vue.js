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

  var Observe = /*#__PURE__*/function () {
    function Observe(data) {
      _classCallCheck(this, Observe);

      // Object.defineProperty  只能劫持 已经存在的属性，增加的 删除的 都不会被劫持 （增加$set. $delete）
      if (Array.isArray(data)) {
        // 重写 7个数组 变异方法（会修改数组本身的方法）

        /**
         *
         */
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
    };
  }

  function Vue(options) {
    this._init(options);
  }

  initMixin(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map
