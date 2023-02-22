// var a
// if (true) {
//   console.log(a)
//   function a() {}
//   a = 21
//   console.log(a)
// }
// console.log(a)

var o = { a: 1 }

console.log({ ...o })

Object.defineProperty(o, 'b', {
  value: 17,
  enumerable: true,
  configurable: true
})
o.b = 15
console.log({ ...o })

const obj = {}
Object.defineProperty(obj, 'name', {
  value: 'Jack',
  writable: true,
  configurable: true,
  enumerable: true
})

