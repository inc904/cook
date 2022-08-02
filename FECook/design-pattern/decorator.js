/**
 * 给圣诞树上装上彩灯，圣诞树还是圣诞树，彩灯就是装饰器。
 * 这种给对象动态地增加职责的方式称为  装饰器模式（decorator）。
 * 装饰器模式能够在不改变对象自身的基础上，在程序运行期间给动向动态的添加职责。
 */

// 场景：对老代码已有的功能进行扩展

var horribleCode = function () {
  console.log('一些老逻辑')
}

// 改成；
var horribleCode = function () {
  console.log('一些老逻辑')

  console.log('我是新逻辑')
}

// 直接去修改已有的函数体，违背了我们的 开放封闭原则
// 往一个函数体力塞太多的业务逻辑，违背了我们都单一职责原则

var _horribleCode = horribleCode

horribleCode = function () {
  _horribleCode()
  console.log('我是新逻辑')
}

horribleCode()
