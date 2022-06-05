// 对模板进行编译
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`) // 匹配到的分组是一个 标签名 <xxx 匹配到的是开始 标签的名字
const endTag = new RegExp(`<\\/${qnameCapture}[^>]*>`) // 匹配的是 </xxxx> 最终匹配到的分组就是结束标签的名字
// 第一个分组就是属性的key value 就是分组3、分组4、分组5
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const startTagClose = /^\s*(\/?)>/ // <div> <br/>
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g // {{asdsada}} 匹配到的内容就是我们表达式的变量

console.log(startTagOpen)

function parseHTML(html) {
  //  html最开始肯定是一个 <
  function advance(n) {
    html = html.substring(n)
  }
  function parseStartTag() {
    const start = html.match(startTagOpen)
    console.log(start)
    if (start) {
      const match = {
        tagName: start[1],
        attrs: []
      }
      advance(start[0].length)
      console.log(11, match)

      // 如果不是开始便签的结束就开始一直匹配下去
      let attr, end
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length)
        match.attrs.push({
          name: attr[1],
          value: attr[3] || attr[4] || attr[5] || true
        })
      }
      console.log(22, html)

      if (end) {
        advance(end[0].length)
      }
      console.log({ match })
      return match
    }
    console.log(21, html)

    console.log(23, html)

    return false // 不是开始标签
  }
  while (html) {
    /*
      如果 textEnd 为0 说明是一个开始标签或者结束标签
      如果 textEnd >0 说明是一个开始就是文本的结束位置
    */
    let textEnd = html.indexOf('<') // 如果 indexOf 中的索引是0 则说明是一个标签
    if (textEnd == 0) {
      const startTagMatch = parseStartTag() // 开始标签的匹配结果
      if (startTagMatch) {
        continue
        // console.log('continue:', html)
      }
      let endTagMatch = html.match(endTag)
      console.log({endTagMatch})
      if (endTagMatch) {
        advance(endTagMatch[0].length)
        continue
      }
    }

    if (textEnd >= 0) {
      // 有文本
      let text = html.substring(0, textEnd) // 文本内容
      if (text) {
        advance(text.length) // 解析到的文本
        console.log(333, html)
      }
    }
  }
  console.log(555, html)
}

export function complieToFunction(template) {
  /*
    1. 将 template 转化成 ast 语法树
    2. 生成 render方法 render 方法执行后的结果就是 虚拟DOM
  */
  parseHTML(template)
  console.log(template)
}
