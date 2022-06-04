class Observe {
  constructor(data) {
    // Object.defineProperty  只能劫持 已经存在的属性，增加的 删除的 都不会被劫持 （增加$set. $delete）
    if (Array.isArray(data)) {
      // 重写 7个数组 变异方法（会修改数组本身的方法）

      /**
       *
       */
      this.observeArray(data)
    } else {
      this.walk(data)
    }

    // this.walk(data)

  }
  walk(data) {
    // 循环对象 对属性 依次劫持
    Object.keys(data).forEach(key => {
      // Object.defineProperty(data, data[key],{})
      // ”重新定义“ 属性
      defineReactive(data, key, data[key])
    })
  }
  observeArray(data) {
    data.forEach(item => observe(item))
  }
}

export function defineReactive(target, key, value) {
  // Object.defineProperty(data, data[key],{})

  if (arguments.length == 2) value = target[key]

  observe(value)

  Object.defineProperty(target, key, {
    get() {
      console.log('用户取值了')
      return value
    },
    set(newValue) {
      console.log('用户设置值了')
      if (newValue === value) return
      observe(newValue)
      value = newValue
    }
  })
}

export function observe(data) {
  // 对data对象进行劫持

  if (typeof data !== 'object' || data == null) return

  // 如果 一个对象 被劫持过了，那就不需要再 劫持了，
  // 判断对象是否被劫持， 增加了一个实例 来判断

  return new Observe(data)
}
