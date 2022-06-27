import { parseHTML } from './parse'

export function complieToFunction(template) {
  /*
    1. 将 template 转化成 ast 语法树
    2. 生成 render方法 render 方法执行后的结果就是 虚拟DOM
  */
  let ast = parseHTML(template)
  // console.log(template)
  console.log('ast：', ast)
  let render = codegen(ast)
  console.log('render:', render)
}

function genProps(attrs) {
  let str = '' // {name. value}
  for (let i = 0; i < attrs.length; i++) {
    let attr = attrs[i]
    console.log(attr, attr.name)
    if (attr.name == 'style') {
      // style: {coloe: red}
      let obj = {}
      attr.value.split(';').forEach(item => {
        // qs 库 queryString
        let [key, value] = item.split(':')
        obj[key] = value
      })
      console.log({ obj })
      attr.value = obj
    }
    str += `${attr.name}:${JSON.stringify(attr.value)},`
  }
  return `{${str.slice(0, -1)}}`
}
function codegen(ast) {
  let code = `_c('${ast.tag}', ${ast.attrs.length > 0 ? genProps(ast.attrs) : null})`
  return code
}
