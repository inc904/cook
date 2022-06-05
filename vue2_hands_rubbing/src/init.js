import { complieToFunction } from './complier'
import { initState } from './state'

export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options

    // 初始化状态
    initState(vm)

    if (options.el) {
      vm.$mount(options.el)
    }
  }
  Vue.prototype.$mount = function (el) {
    console.log({ el })
    const vm = this
    el = document.querySelector(el)
    console.log(2, { el })

    let opts = vm.$options
    if (!opts.render) {
      // 先查找有没有render函数
      let template // 没有render 看一下 是否写了 template ，没有写template 采用外部的template
      if (!opts.template && el) {
        template = el.outerHTML
      } else {
        if (el) {
          // 如果有el 则采用模板的内容
          template = opts.template
        }
      }
      if (template) {
        const render = complieToFunction(template)
        console.log('r1', { render })

        opts.render = render
        console.log('r', { render })
      }
      // console.log({ template })
    }
  }
}
