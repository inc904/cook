// ## TAG let 和 const

// ## TAG 块作用域

// ## TAG 箭头函数

// ## TAG 模板字符串

// ## TAG 函数
// - 默认参数

function multiply(a, b = 2) {
  return a * b
}
multiply(5) // 10

// - rest 参数

// ## TAG 类 class

// ## TAG Promise

// ## TAG for of
// 可迭代对象的循环
let arr = [12, 3, 4, 5]
let obj = { name: 'Jack' }
for (i of arr) {
  console.log(i)
}
for (i of 'hello') {
  console.log(i)
}
