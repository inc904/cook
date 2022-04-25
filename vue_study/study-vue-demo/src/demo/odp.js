import Dep from './dep.js'


let person = {
  name: 'Jack',
  age: 18
}

// version 0.1 封装 defineProperty
function defineReactive0(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return val
    },
    set: function (newVal) {
      if (newVal != val) val = newVal
    }
  })
}

// WANT 当数据的属性变化的时候，可以通知那些使用了数据的地方



// 追踪变化 version1.0
// 假设依赖是一个函数，保存在window.target上，
function defineReactive1(data, key, val) {
  let dep = []
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('get')
      dep.push(window.target)
      return val
    },
    set: function (newVal) {
      if (val === newVal) return
      for (let i = 0; i < dep.length; i++) {
        dep[i](newVal, val)
      }
      val = newVal
    }
  })
}

// NOTE 在 getter 中收集依赖，在 setter 中 触发依赖


defineReactive1(person, 'age', 19)
// let _name = person.name
// console.log({ person, _name })

// version2.0
function defineReactive(data, key, val) {
  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.depend()
      console.log(dep.subs)
      return val
    },
    set: function (newVal) {
      if ((val = newVal)) return
      val = newVal
      dep.notify()
      console.log(dep.subs)
    }
  })
}
defineReactive(person, 'age', 19)
let _name = person.name
console.log({ person, _name })
