let a = 1
function fn(a) {
  return function () {
    console.log(a)
  }
}
let fn2 = fn(2)
fn2()

function _equal(fn) {
  return function (...args) {
    return fn.apply(this, args)
  }
}

function add(x, y) {
  return x + y
}

var addnew1 = _equal(add)
console.log(add(1, 2))
console.log(addnew1(1, 2))
console.log('-'.repeat(10))
let obj = {
  x: 2,
  y: 3,
  add: function () {
    console.log(this)
    return this.x + this.y
  }
}
console.log(obj.add())
var add2 = obj.add()
var addnew2 = _equal(obj.add.bind(obj))()
var addnew4 = _equal(obj.add.bind(obj))
var addnew3 = _equal(add2)
console.log(addnew2)
console.log(addnew3)
console.log(obj.add.bind(obj))
console.log(addnew4)
console.log(typeof _equal())