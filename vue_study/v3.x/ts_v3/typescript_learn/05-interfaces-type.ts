/*
# TAG 对象的类型--接口
typescript 中 使用 接口（interface）来定义对象的类型
接口： 对行为的抽象，而具体如何行动需要由类 classes 去实现 implement
1. 除了对类的一部分内容进行抽象
2. 也用于对 【对象的形状 shape 】进行描述
3. 接口一般 【首字母大写】，有的编程语言会建议在接口的名称前面加上 I 前缀
*/


interface Person {
  name: string
  age: number
}
let tom: Person = {
  name: 'tom',
  age: 34
}
// 定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。


// 定义的变量比接口少了一些属性是不也允许的
interface Person2 {
  name: string
  age: number
}
// let jerry: Person2 = {
//   name: 'jerrt'
// } // 报错： 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person2" 中需要该属性。

// 定义的变量比接口 多了一些属性是不也允许的

let rose: Person2 = {
  name: 'rose',
  age: 25,
  // gender: 'male'// 报错： “gender”不在类型“Person2”中
}

// 赋值的时候，变量的形状 必须和 接口的形状 保持一致

// ## TAG 可选属性
// 希望 不要 完全 匹配一个形状

interface Animal {
  name: string,
  age?: number,
}

let cat: Animal = {
  name: 'mimi',
  age: 1
}

let dog: Animal = {
  name: 'wangwang',
}
let dog2: Animal = {
  name: 'wangwang',
  // gender: 'male' //不允许添加未定义的属性
}

// ## TAG 任意属性
// 希望接口允许有任意属性
interface Student {
  name: string,
  age: number
  [proName: string]: any
}
let ming: Student = {
  name: 'xiaoming',
  age: 18,
  gender: 'female'
}
// [propName: string] 定义了任意属性取 string 类型的值。


// interface Student2 {
//   name: string
//   age: number
//   [proName: string]: string
// }
// let lili: Student2 = {
//   name: 'lili',
//   age: 25,
//   gender: 'male'
// } // 报错

// 如果定义了 任意属性的类型，那么 确定属性 和 可选属性 就必须都是 它的子类型
// 任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。


// 一个接口只能定义一个任意属性。如果有多个 类型的 属性，则可以在 任意属性 中 使用联合类型。

interface Person3 {
  name: string
  age: number
  [propName: string]: string | number
}

//  ## TAG 只读属性

// 希望 对象中 有一些字段 只能在创建的时候被赋值，使用 readonly 定义只读属性

interface Person4 {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}

// let tom4: Person4 = {
//   name: 'Tom',
//   age: 18
// } // 定义 tom 的时候 米有id  报错
// tom4.id = 18 // 定义后 尝试给 readonly 属性 赋值，报错
