/*
# TAG 联合类型（Union types） 表示取值可以为多种类型中的一种。
使用 | 分割每个类型  a|b  使用a类型或b类型 但是不能是其他类型
*/

let myFavoriteNumber: string | number
myFavoriteNumber = 7
myFavoriteNumber = 'serve'
// myFavoriteNumber = true // 报错： 不能将类型“boolean”分配给类型“string | number”

// ## TAG 访问联合类型的属性或方法
// 当 typescript 不确定一个联合类型的变量到底是哪个类型的时候，我们 * 只能访问此联合类型的所有类型里共有的属性或方法

function getLength(something: string | number): number {
  return something.length // 报错 类型“string | number”上不存在属性“length”。
}
// length 不是 string 和 number 的共有属性，所以会报错

function getString(something: string | number): string {
  return something.toString()
}

// 联合类型的变量在被赋值的时候，会根据 类型推断 的规则 推断出一个类型

let myFavoriteNumber2: string | number
myFavoriteNumber2 = 'seven'
console.log(myFavoriteNumber2.length)
myFavoriteNumber2 = 7
console.log(myFavoriteNumber2.length) // 类型“number”上不存在属性“length”
