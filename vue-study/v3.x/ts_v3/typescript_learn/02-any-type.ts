/*
 # TAG 任意值（any）
  表示 允许 赋值为 任何 类型
*/

/*
  如果是一个 普通 类型，在赋值过程中是不允许被修改类型的
*/

let myNumber: string = 'seven'
// myNumber = 7 //不能将类型“number”分配给类型“string”

// 但是 如果是 any 类型，允许被修改类型

let youNumber: any = 'nine'
youNumber = 9


// ## TAG 任意值的属性和方法

let anyThing: any = 'hello'

//  在任意值上访问属性
console.log(anyThing.myName) // undefined 不会报错
// console.log(anyThing.myName.firstName) // 编译 不会报错 运行会报错

// 在任意值上调用方法

let anyThing2: any = 'Tom'
// 以下 编译不会报错，运行时 会报错
// anyThing2.setName('Jerry')
// anyThing2.setName('Jerry').sayHello()

// ## TAG 未声明类型的变量
let something
// is ok
something = 'serve'
something = 7

// 等价于

let something2: any
something2 = 'serve'
something2 = 9

// something2.setName('Tom') // 同样的 编译不会报错 运行会报错


