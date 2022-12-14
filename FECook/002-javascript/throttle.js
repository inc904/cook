let o1 = {
  a: 1,
  say: function () {
    console.log('say:', this, 'a:', this.a)
  }
}
// 节流：定时器写法
// function throttle(fn, delay) {
//   let timer
//   return function () {
//     if (!timer) {
//       timer = setTimeout(() => {
//         timer = null
//         fn.call(this)
//       }, delay)
//     } else {
//       console.log('技能CD中')
//     }
//   }
// }
function throttle2(fn, delay) {
  let preTime = 0

  return function () {
    let nowTime = +new Date()
    let remain = delay - (nowTime - preTime)
    if (remain < 0) {
      //  当前时间 - 上次触发的时间 >= CD时间， 可以再次触发
      preTime = nowTime
      fn.call(this)
    } else {
      // 无法触发 间隔时间不到
      console.log('技能CD中', remain / 1000)
    }
  }
}
function throttle3(func, wait) {
  console.log(func)
  let previous = 0

  return function () {
    let now = +new Date()
    let remain = wait - (now - previous)

    if (remain < 0) {
      previous = now
      func.call(this, arguments)
    } else {
      console.log('技能CD中')
    }
  }
}
// function throttle(fn, delay) {
//   console.log({fn})
//   let timer = null
//   return () => {
//     console.log({arguments})
//     if (timer) {
//       return
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, arguments)
//       timer = null
//     }, delay)
//   }
// }

function throttle(fn, delay) {
  let last = 0
  return (...args) => {
    const now = +Date.now()
    console.log('call', now, last, delay)
    if (now > last + delay) {
      last = now
      fn.apply(this, args)
    }
  }
}

// function throttle(func, wait) {
//   let previous = 0
//   return function () {
//     let now = +new Date()
//     let remain = wait - (now - previous)

//     if (remain < 0) {
//       previous = now
//       func.call(this, arguments)
//     } else {
//       // console.log('技能CD中')
//     }
//   }
// }
