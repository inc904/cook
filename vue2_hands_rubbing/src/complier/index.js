import { parseHTML } from './parse'

export function complieToFunction(template) {
  /*
    1. 将 template 转化成 ast 语法树
    2. 生成 render方法 render 方法执行后的结果就是 虚拟DOM
  */
  let ast = parseHTML(template)
  // console.log(template)
  console.log({ ast })
  function render() {
    return h()
  }
  function h() {}
}
