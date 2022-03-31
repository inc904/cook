let arr = [1, 2, 3, 4]

console.log(arr.map((item) => item * 2))

arr.forEach((item) => console.log(item * 2))

function myForEach(arr, fn) {
  for (let i of arr) {
    fn(i)
  }
}
myForEach(arr, (item) => {
  console.log(item * 2)
})

function myMap(arr, fn) {
  let arr_new = []
  for (let i of arr) {
    arr_new.push(fn(i))
  }
  return arr_new
}

console.log(myMap(arr, (item) => item * 2))
