// extend 继承某个类，继承之后可以使用父类的方法，也可以重写父类的方法
// implements 继承某一个类，必须重写才可以使用

interface IPersonInfo {
  name: string
  age: number
  sex?: string
  show(): void
}
interface IMusic {
  music: string
}

class Person implements IPersonInfo, IMusic {
  name: string = 'Rose'
  age: number = 23
  music: string = '盛夏的果实'
  show() {
    console.log(`${this.name}--${this.age}--${this.music}`)
  }
}
let p = new Person()
p.show()


//  获取指定对象, 部分属性的值, 放到数组中返回
let obj = {
  name: '吴倩',
  age: 18,
  gender: true
}
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  let arr = [] as T[K][]
  keys.forEach(key => {
    arr.push(obj[key])
  })
  return arr
}
let result = getValues(obj, ['name', 'age'])
console.log(result)
// 不会返回null/undefined/never类型
interface TestInterface {
  a: string,
  b: number,
  c: boolean,
  d: symbol,
  e: null,
  f: undefined,
  g: never
}
type MyType = TestInterface[keyof TestInterface]
let a: MyType = 'hello'
// { a: 'hello', b: 12, c: true, d: Symbol, e: null, f: undefined }

interface test {
  name: string
  age: number
}

let pname: test = {
  name: 'string',
  age: 18
}

type aa = {
  name: string
  age: number
}

let pname2: test = {
  name: 'string',
  age: 18
}
