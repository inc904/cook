// #TAG 类型断言
// Type Assertion 可以用来手动制定一个值的类型。

// 语法
// 值 as 类型
// <类型>值

// tsx 中必须使用第一个
// 形如 <Foo> 语法 在 react 中 表示的是一个 ReactNode，在 ts 中除了表示 类型断言外，也可能表示一个泛型

// ## TAG 类型断言的用途

/*
  ### TAG 1. 将一个联合类型 断言为其中一个类型
*/
// 当 ts 不确定 一个 联合类型的变量 到底是 哪个类型的时候，我们后产能访问此 联合类型的 所有类型 中 共有的 属性 或 方法。

interface Cat {
  name: string
  run(): void
}
interface Fish {
  name: string
  swim(): void
}

function getName(animal: Cat | Fish) {
  return animal.name
}

function isFish(animal: Cat | Fish) {
  if (typeof animal.swim === 'function') {
    return true
  }
  return false
}
function isFish2(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

// 【类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：】


function swim(animal: Cat | Fish) {
  (animal as Fish).swim()
}
const jerry: Cat = {
  name: 'Jerry',
  run() { console.log('run') }
}
swim(jerry)
// Uncaught TypeError: animal.swim is not a function`
// 上面的例子编译时不会报错，但在运行时会报错：

// 原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。


// 总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误

// ### TAG 将一个父类断言为更加具体的子类

// 当类之前有继承关系时，类型断言也是很常见的。

class ApiError extends Error {
  code: number = 0
}

class HttpError extends Error {
  statusCode: number = 200
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true
  }
  return false
}
