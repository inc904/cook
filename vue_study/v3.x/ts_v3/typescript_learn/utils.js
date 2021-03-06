// 1、 防抖

function debounce(fn, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
} // 测试 const task = () => {   console.log('run task') } const debounceTask = debounce(task, 1000) window.addEventListener('scroll', debounceTask)
// 2、 节流

function throttle(fn, delay) {
  let last = 0 // 上次触发时间
  return (...args) => {
    const now = Date.now()
    if (now - last > delay) {
      last = now
      fn.apply(this, args)
    }
  }
} // 测试 const task = () => {   console.log('run task') } const throttleTask = throttle(task, 1000) window.addEventListener('scroll', throttleTask)
// 3、 深拷贝

function deepClone(obj, cache = new WeakMap()) {
  if (typeof obj !== 'object') return obj // 普通类型，直接返回
  if (obj === null) return obj
  if (cache.get(obj)) return cache.get(obj) // 防止循环引用，程序进入死循环
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj) // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
  let cloneObj = new obj.constructor()
  cache.set(obj, cloneObj) // 缓存拷贝的对象，用于处理循环引用的情况
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
  }
  return cloneObj
} // 测试 const obj = { name: 'Jack', address: { x: 100, y: 200 } } obj.a = obj // 循环引用 const newObj = deepClone(obj) console.log(newObj.address === obj.address) // false

// 4、 实现 Promise
class MyPromise {
  constructor(executor) {
    // executor执行器
    this.status = 'pending' // 等待状态
    this.value = null // 成功或失败的参数
    this.fulfilledCallbacks = [] // 成功的函数队列
    this.rejectedCallbacks = [] // 失败的函数队列
    const that = this

    function resolve(value) {
      // 成功的方法
      if (that.status === 'pending') {
        that.status = 'resolved'
        that.value = value
        that.fulfilledCallbacks.forEach(myFn => myFn(that.value)) //执行回调方法
      }
    }

    function reject(value) {
      //失败的方法
      if (that.status === 'pending') {
        that.status = 'rejected'
        that.value = value
        that.rejectedCallbacks.forEach(myFn => myFn(that.value)) //执行回调方法
      }
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === 'pending') {
      // 等待状态，添加回调函数到成功的函数队列
      this.fulfilledCallbacks.push(() => {
        onFulfilled(this.value)
      }) // 等待状态，添加回调函数到失败的函数队列
      this.rejectedCallbacks.push(() => {
        onRejected(this.value)
      })
    }
    if (this.status === 'resolved') {
      // 支持同步调用
      console.log('this', this)
      onFulfilled(this.value)
    }
    if (this.status === 'rejected') {
      // 支持同步调用
      onRejected(this.value)
    }
  }
} // 测试

function fn() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.6) {
        resolve(1)
      } else {
        reject(2)
      }
    }, 1000)
  })
}
fn().then(
  res => {
    console.log('res', res) // res 1
  },
  err => {
    console.log('err', err) // err 2
  }
)

// 5、 异步控制并发数

function limitRequest(urls = [], limit = 5) {
  return new Promise((resolve, reject) => {
    const len = urls.length
    let count = 0 // 当前进行到第几个任务
    const start = async () => {
      const url = urls.shift() // 从数组中拿取第一个任务
      if (url) {
        try {
          await axios.post(url)
          if (count == len - 1) {
            // 最后一个任务
            resolve()
          } else {
            count++ // 成功，启动下一个任务
            start()
          }
        } catch (e) {
          count++ // 失败，也启动下一个任务
          start()
        }
      }
    } // 启动limit个任务
    while (limit > 0) {
      start()
      limit -= 1
    }
  })
} // 测试
limitRequest(['http://xxa', 'http://xxb', 'http://xxc', 'http://xxd', 'http://xxe'])

// 6、 ES5继承（ 组合继承）
function Parent(name) {
  this.name = name
}
Parent.prototype.eat = function () {
  console.log(this.name + ' is eating')
}

function Child(name, age) {
  Parent.call(this, name) // 构造函数继承
  this.age = age
}
Child.prototype = new Parent() // 原型链继承
Child.prototype.contructor = Child
Child.prototype.study = function () {
  console.log(this.name + ' is studying')
} // 测试 let child = new Child('xiaoming', 16) console.log(child.name) // xiaoming child.eat() // xiaoming is eating child.study() // xiaoming is studying

// 7、 数组排序
// sort 排序
// 对数字进行排序，简写
const arr1 = [3, 2, 4, 1, 5]
arr.sort((a, b) => a - b)
console.log(arr) // [1, 2, 3, 4, 5]
// 对字母进行排序
const arr2 = ['b', 'c', 'a', 'e', 'd']
arr.sort((a, b) => {
  if (a > b) return 1
  else if (a < b) return -1
  else return 0
})
console.log(arr) // ['a', 'b', 'c', 'd', 'e']

// 冒泡排序
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    // 从第一个元素开始，比较相邻的两个元素，前者大就交换位置
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let num = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = num
      }
    } // 每次遍历结束，都能找到一个最大值，放在数组最后
  }
  return arr
} //测试
console.log(bubbleSort([2, 3, 1, 5, 4])) // [1, 2, 3, 4, 5]
// 8、 数组去重
// Set 去重
const newArr3 = [...new Set(arr)]
// Array.from 去重
const newArr4 = Array.from(new Set(arr))
// indexOf 去重

function resetArr(arr) {
  let res = []
  arr.forEach(item => {
    if (res.indexOf(item) === -1) {
      res.push(item)
    }
  })
  return res
} // 测试 const arr = [1, 1, 2, 3, 3] console.log(resetArr(arr)) // [1, 2, 3]

// 9、 获取url参数

function getParams(url) {
  const res = {}
  if (url.includes('?')) {
    const str = url.split('?')[1]
    const arr = str.split('&amp;')
    arr.forEach(item => {
      const key = item.split('=')[0]
      const val = item.split('=')[1]
      res[key] = decodeURIComponent(val) // 解码
    })
  }
  return res
} // 测试 const user = getParams('http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&amp;age=16')
console.log(user) // { user: '阿飞', age: '16' }

// 10、 事件总线 | 发布订阅模式
class EventEmitter {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }
  off(name, fn) {
    const tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }
  emit(name, once = false) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn()
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
} // 测试
const eventBus = new EventEmitter()
const task1 = () => {
  console.log('task1')
}
const task2 = () => {
  console.log('task2')
}
eventBus.on('task', task1)
eventBus.on('task', task2)
eventBus.off('task', task1)
setTimeout(() => {
  eventBus.emit('task') // task2
}, 1000)
