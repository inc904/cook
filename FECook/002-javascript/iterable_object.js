let range = {
  from: 0,
  to: 5
}

/**
 * 希望 for···of 这样运行
 * for(num of range) >>> num = 1,2,3,4,5
 */
range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    }
  }
}
for (let i of range) {
  console.log(i)
}
console.log(range)

let arrayLike = {
  0: 'hello',
  1: 'world',
  length: 2
}
let arr2 = Array.from(arrayLike)
console.log(arr2)
