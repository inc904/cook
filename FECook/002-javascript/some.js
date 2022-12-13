// some 如果有一个元素满足条件，则返回 true,剩余的元素不会在执行检测。
var ages = [3, 10, 18, 20]
var res = ages.some(item => item > 18)
console.log(res)

function test() {
  let a = 100
  console.log(this.a)
}

let o1 = {
  a: 1,
  say: function () {
    console.log('say:', this, 'a:', this.a)
  }
}
o1.say()

// debounce(o1.say, 1000)()

// 防抖，一段时间内 执行最后一次
function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.call(this)
    }, delay)
  }
}
function debounce2(fn, delay) {
  var timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this)
    }, delay)
  }
}

// debounce2(o1.say, 1000)()
function debounce3(func, wait) {
  let timeout = null

  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, arguments)
    }, wait)
  }
}

// setTimeout(debounce3(o1.say, 1000), 100)
