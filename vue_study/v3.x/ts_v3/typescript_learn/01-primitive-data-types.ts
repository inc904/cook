// "use strict"
/*
  # TAG 原始数据类型
JavaScript 的类型飞卫两种，原始数据类型 （primitive data types） 和 对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、null、undefined以及 ES6 的 Symbol 和 ES10 中的 Bigint。

*/


// ## TAG 布尔值

let isDone: boolean = false
console.log('isDone:', isDone, typeof isDone)

// 使用 构造函数 Boolean 创造的对象不是 布尔值
let createNewBoolean = new Boolean(1)
console.log('createNewBoolean:', createNewBoolean, typeof createNewBoolean)  // [Boolean: true] object

// boolean 是 JavaScript 的基本类型，而 Boolean 是 javascript 中的 构造函数，其他 基本类型 中 除了 null 和 undefined 是一样的


// ## TAG 数值

let decLiteral: number = 6
let hexLIteral: number = 0xf00d

// ## 字符串

let myName = 'Jack'
let yourName: string = 'Rose'

// ## TAG 空值


// JavaScript 中没有空值的概念。在 typescript中 ，可以用 void 表示 没有任何返回值的函数
function alterName(): void {
  console.log(`my name is ${myName}`)
}
alterName()

// 声明一个 void 没有什么用， 只能讲它 赋值 给 null 和 undefined

let unusable: void = undefined
// let unusable2: void = 'hello' // 报错


// ## TAG null 和 undefined

let u: undefined = undefined
let n: null = null



/*
  NOTE 与文档有差异：
  与 void 的区别是，undefined 和 null 是所有类型的 子类型
  也就是说 undefined 可以赋值给 number 类型
*/

// 实际操作中， 以下 都会报错，不能将 undefined 或 null 赋值 给number 类型

// let num: number = undefined
// let num2: number = null
// let num3: number = void
