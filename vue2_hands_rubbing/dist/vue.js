(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  // 对模板进行编译
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z]*";
  var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")");
  var startTagOpen = new RegExp("^<".concat(qnameCapture)); // 匹配到的分组是一个 标签名 <xxx 匹配到的是开始 标签的名字

  var endTag = new RegExp("<\\/".concat(qnameCapture, "[^>]*>")); // 匹配的是 </xxxx> 最终匹配到的分组就是结束标签的名字
  // 第一个分组就是属性的key value 就是分组3、分组4、分组5

  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var startTagClose = /^\s*(\/?)>/; // <div> <br/>
  // console.log(startTagOpen)

  function parseHTML(html) {
    var ELEMENT_TYPE = 1;
    var TEXT_TYPE = 1;
    var stack = []; // 用于存放元素的

    var currentParent, root; // 指向的是栈中的最后一个 ; 根节点
    //  html最开始肯定是一个 <

    var _loop = function _loop() {
      /*
        如果 textEnd 为0 说明是一个开始标签或者结束标签
        如果 textEnd >0 说明是一个开始就是文本的结束位置
      */
      function createATSElement(tag, attrs) {
        return {
          tag: tag,
          type: ELEMENT_TYPE,
          attrs: attrs,
          children: [],
          parent: null
        };
      }

      function onStart(tag, attrs) {
        var node = createATSElement(tag, attrs); // 创造一个 ast 节点

        if (!root) {
          // 看一下是否是 空树，如果是空树 则当前是输得根节点
          root = node;
        }

        if (currentParent) {
          node.parent = currentParent;
          currentParent.children.push(node);
        }

        stack.push(node);
        currentParent = node; // currentParent 是栈中的最后一个
      }

      function onChars(text) {
        var _currentParent;

        text = text.replace(/\s/g, ''); // 文本直接 放到 当前指向的节点中

        (_currentParent = currentParent) === null || _currentParent === void 0 ? void 0 : _currentParent.children.push({
          type: TEXT_TYPE,
          text: text,
          parent: currentParent
        });
      }

      function onEnd(tag) {
        //
        stack.pop(); // 将栈中的最后一个 弹出

        currentParent = stack[stack.length - 1]; // 可以在这里校验 弹出的标签事不是 tag 是不是合法
      }

      var textEnd = html.indexOf('<'); // 如果 indexOf 中的索引是0 则说明是一个标签

      if (textEnd == 0) {
        var startTagMatch = parseStartTag(); // 开始标签的匹配结果

        if (startTagMatch) {
          onStart(startTagMatch.tagName, startTagMatch.attrs);
          return "continue";
        } // // console.log('continue:', html)
        // 在html截取后 只剩 标签的闭合为止的时候


        var endTagMatch = html.match(endTag); // console.log({ endTagMatch })

        if (endTagMatch) {
          advance(endTagMatch[0].length);
          onEnd(endTagMatch.tagName);
          return "continue";
        }
      }

      if (textEnd > 0) {
        // 如果 indexOf 中的索引 大于0 则说明是一个 结束标签开始的文职 即文本的结束为止 hello</div>
        // 有文本
        var text = html.substring(0, textEnd); // 文本内容

        if (text) {
          onChars(text);
          advance(text.length); // 解析到的文本
          // console.log(333, html)
        }
      }
    };

    while (html) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }

    console.log(root);

    function advance(n) {
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen); // console.log({ start })
      // console.log(start)

      if (start) {
        var match = {
          tagName: start[1],
          attrs: []
        };
        advance(start[0].length); // console.log('startTagOpen=>>', match)
        // 如果不是开始标签的结束就开始一直匹配下去

        var attr, end;

        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          // // console.log('attribute==>',html.match(attribute))
          advance(attr[0].length);
          match.attrs.push({
            name: attr[1],
            value: attr[3] || attr[4] || attr[5] || true
          });
        } // console.log(22, html)


        if (end) {
          advance(end[0].length);
        } // console.log({ match })


        return match;
      }

      return false; // 不是开始标签
    } // console.log(555, html)
    // console.log(999, root)

  }

  function complieToFunction(template) {
    /*
      1. 将 template 转化成 ast 语法树
      2. 生成 render方法 render 方法执行后的结果就是 虚拟DOM
    */
    parseHTML(template); // console.log(template)
  }

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
        // if (!opts.template && el) {
        //   template = el.outerHTML
        // } else {
        //   if (el) {
        //     // 如果有el 则采用模板的内容
        //     template = opts.template
        //   }
        // }

        if (el) {
          template = opts.template ? opts.template : el.outerHTML;
        }

        if (template) {
          console.log('r0', template);
          var render = complieToFunction(template);
          opts.render = render;
          console.log('r', {
            render: render
          });
        } // console.log({ template })

      }
    }; // script 标签引用的 vue.global.js 这个编译过程是在浏览器运行的
    // runtime是不再包含模板编译的，这个编译是打包的时候通过loader来转义 .vue 文件的
    // 用 runtime的时候不能使用 template 配置项

  }

  function Vue(options) {
    this._init(options);
  }

  initMixin(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map
