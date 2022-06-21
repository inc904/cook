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
    const vm = this
    el = document.querySelector(el)

    let opts = vm.$options
    if (!opts.render) {
      // 先查找有没有render函数
      let template // 没有render 看一下 是否写了 template ，没有写template 采用外部的template
      // if (!opts.template && el) {
      //   template = el.outerHTML
      // } else {
      //   if (el) {
      //     // 如果有el 则采用模板的内容
      //     template = opts.template
      //   }
      // }
      if (el) {
        template = opts.template ? opts.template : el.outerHTML
      }

      if (template) {
        console.log('r0', template)
        const render = complieToFunction(template)

        opts.render = render
      }
    }
  }
  // script 标签引用的 vue.global.js 这个编译过程是在浏览器运行的
  // runtime是不再包含模板编译的，这个编译是打包的时候通过loader来转义 .vue 文件的
  // 用 runtime的时候不能使用 template 配置项
}
