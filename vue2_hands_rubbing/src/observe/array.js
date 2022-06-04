// 我们希望重写数组中的部分方法
let oldArrayProto = Array.prototype

// Array.prototype.push = function (){}  // 会被直接覆盖，Bad

// 拷贝 一份新的出来

// newArrayProto.__proto__ = oldArrayProto
export let newArrayProto = Object.create(oldArrayProto)

// newArrayProto.push = function(){}

// 找到所有的变异方法
let methods = ['push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice']

methods.forEach(method => {
  // 重写数组的方法
  newArrayProto[method] = function (...args) {
    // 内部调用原来的方法， 函数的劫持， 切片编程
    const result = oldArrayProto[method].call(this, ...args)

    // 我们需要对新增的 数据 再次进行劫持
    let inserted
    let ob = this.__ob__
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
      default:
        break
    }
    console.log({inserted})
    if(inserted){
      // 对新增内容 再次进行观测
      /*
      需要用到 对数组的观测方法，考虑 从 this (data) 上引入
      定义 自定义属性 data.__ob__，使得我们可以使用 Observe 上
      的 数组观测方法
     */
      ob.observeArray(inserted)
    }

    return result
  }
})
