## 函数中的 5 种调用模式

ES3 时代就已经存在 4 种，bind 模式（ES5 引入）

- 函数模式

  this 是 全局对象：浏览器中是 window，node 中是 global

- 构造器（constructor）模式

  this 表示刚刚创建出来的对象

- 方法（method）模式

  this 表示 引导方法 调用的对象

- 上下文（context）模式

  this 可以使用参数来动态的描述（动态绑定）

- bind 模式

  与上下文模式类似，也是通过参数来确定（静态绑定）


  ## 函数模式

  特点：独立的运行，调用语法格式之前没有任何引导数据。
  ```js
    function foo (){
      console.log('函数模式',this)
    }

    foo() // 前面不能有'通过 xxx 得到函数名' 这种行为
  ```
## 构造器模式

我们需要知道构造器的执行过程

语法： new 构造函数

```js
function Person (){}

var p = new Person()
```
1. 先使用 new 运算符 分配内存空间，在 js 中就是创建对象（一个空的对象，一个具有原型结构的对象）
- 空对象表示没有自己的任何成员
- 具有原型结构，该对象的原型`__proto__` 是 Person.prototype

2. 

## 上下文语法

概念：

1. 函数名.call(context, arg1, arg2, ...)
2. 函数名.apply(context, [arg1, arg2, ...])

异同
1. 参数个数不同
2. 调用的意义：两种调用其实都是在调用函数。
3. 函数在执行的时候会创建 activeObject，就是函数中的this
  ```js
  function foo(){
     console.log('调用')
  }

  foo()
  foo.call()
  foo.apply()

  ```
1. 传入的是 引用类型，除了 null 外 就是表示 this
2. 传入的是 基本类型，他们会转化成 包装类型
3. 如果传入的是 null、undefined，那么上下文就是全局对象


