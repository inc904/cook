// let pathname = window.location.pathname
let pathname = 'route1'
let condition = ['route1', 'route2', 'route3']
if (
  condition.find((item) => {
    pathname.includes(item)
  })
) {
  console.log('find', item)
} else {
  console.log('not found!')
}

let res = condition.find((item) => {
  return pathname.includes(item)
})
console.log(res)

let res2 = condition.includes(pathname)
console.log('res2', res2)

// indexOf 检测数组是否包含指定的值
let res3 = condition.indexOf(pathname)
console.log('res3', res3)

// find 返回数组中满足条件的第一个元素的值，如果没有，返回 undefined
let res4 = condition.find((item) => item === pathname)
console.log('res4', res4)

// findIndex 返回数组中满足条件的第一个元素的值，如果没有，返回 -1
let res5 = condition.findIndex((item) => item === pathname)
console.log('res5', res5)
