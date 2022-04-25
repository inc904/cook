let arr = [1, 2, 5, 7, 8, 2]
let temp = []
let res = arr.forEach(item => {
  if (item > 5) {
    temp.push(item)
  }
})
console.log({ res, temp, arr })
