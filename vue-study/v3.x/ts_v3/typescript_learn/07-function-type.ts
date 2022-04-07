// # TAG 函数的类型
// 函数是 javascript 中的一等公民

// ## 函数声明 Function Declaration


// 函数声明
function sum(x, y) {
  return x + y
}

// 函数表达式
let mySum = function (x, y) {
  return x + y
}

function sum2(x: number, y: number): number {
  return x + y
}
// 输入多余的（或者少于要求的）参数，是不被允许的


let mySum2 = function (x: number, y: number): number {
  return x + y
}


let mySum3: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// 在 ES6 中，=> 叫做箭头函数，

// ## 接口定义函数的形状
interface ISearchFunc {
  (source: string, subString: string): boolean
}
// let mySearch: ISearchFunc
let mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}
// mySearch =  function (source: string, subString: number) {
//   return source.search(subString) !== -1
// }
// mySearch()

// 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

// ## 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + '' + lastName
  } else {
    return firstName
  }
}

let tomcat = buildName('Tom', "cat")
let tom1 = buildName('Tom')

// 【可选参数必须接在必需参数后面】

// ## 参数默认值
// ES6 中允许给函数的参数 提啊难捱默认值， typescript 会将添加了默认值的 参数 识别为 可选参数

function buildName2(firstName: string, lastName: string = 'Cat') {
  return firstName + '' + lastName
}
let tomcat2 = buildName2('Tom', 'Cat')
let tom2 = buildName2('Tom')

// 此时就不受「可选参数必须接在必需参数后面」的限制
function buildName3(firstName: string = 'Tom', lastName: string) {
  return firstName + '' + lastName
}

// ## 剩余参数 ，rest 参数

// function push(array, ...items) {
//   items.forEach(function (item) {
//     array.push(item)
//   })
// }
// let a: any[] = []
// push(a, 1, 2, 3)

function push2(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item)
  })
}
let a2: any[] = []
push(a2, 1, 2, 3)

// 【rest 参数只能是最后一个参数】

// ## 重载

function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

/*
上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
*/
