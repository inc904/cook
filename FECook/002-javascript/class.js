function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function () {
  return `(${this.x}, ${this.y})`
}
var p = new Point(1, 2)
console.log(p.toString())

class Point2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return `(${this.x}, ${this.y})`
  }
}

console.log(typeof Point2)
console.log(Point2 === Point2.prototype.constructor)
console.log(Point === Point.prototype.constructor)
console.log(p, p.__proto__)
console.log(p.__proto__ == Point.prototype)
console.log(Point.name)


let p3 = class Point3 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return `(${this.x}, ${this.y})`
  }
}
console.log(p3.name)


let p4 = class { }
console.log(p4)

// 类的所有方法都定义在 类 的 prototype 属性上。
class Point6 {
  constructor() { }
  toString() { }
  toValue() { }
}

// 等同于
Point6.prototype = {
  constructor() { },
  toString() { },
  toValue() { }
}

class B { }
console.log(B.prototype.constructor == B)
console.log((new B()).__proto__.constructor == B)
console.log(B.constructor)
console.log(B.prototype == B)

// ## 类的内部 所有定义的方法，都是不可枚举的
// ES5 中  对构造函数的原型上添加 方法 是壳枚举的

// 生成类的实例 通过 new 关键字, 如果直接调用 class  会报错


// 与ES5 一样 实例的实行 除非 显式的定义在本身上(this)  否则都是定义在 原型上 即 class

// 与ES5一样,类的所有实例 共享一个 一个原型对象

var p1 = new Point()
var p2 = new Point()

p1.__proto__ == p2.__proto__  // true

// p1 p2 都是 Point 的实例，他们的原型都是 Point.prototype


class Foo {
  static sayHello(){
    console.log('hello123')
  }
}

Foo.sayHello() // hello

class Point7 {
}
class ColorPoint extends Point7 {
  constructor() {
  }
}
new ColorPoint()
