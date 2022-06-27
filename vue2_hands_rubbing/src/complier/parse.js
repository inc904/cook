// 对模板进行编译
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`) // 匹配到的分组是一个 标签名 <xxx 匹配到的是开始 标签的名字
const endTag = new RegExp(`<\\/${qnameCapture}[^>]*>`) // 匹配的是 </xxxx> 最终匹配到的分组就是结束标签的名字
// 第一个分组就是属性的key value 就是分组3、分组4、分组5
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const startTagClose = /^\s*(\/?)>/ // <div> <br/>
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g // {{asdsada}} 匹配到的内容就是我们表达式的变量

// console.log(startTagOpen)

export function parseHTML(html) {
  const ELEMENT_TYPE = 1
  const TEXT_TYPE = 1
  const stack = [] // 用于存放元素的
  let currentParent, root // 指向的是栈中的最后一个 ; 根节点
  //  html最开始肯定是一个 <
  while (html) {
    /*
      如果 textEnd 为0 说明是一个开始标签或者结束标签
      如果 textEnd >0 说明是一个开始就是文本的结束位置
    */
    let textEnd = html.indexOf('<') // 如果 indexOf 中的索引是0 则说明是一个标签
    if (textEnd == 0) {
      const startTagMatch = parseStartTag() // 开始标签的匹配结果
      if (startTagMatch) {
        onStart(startTagMatch.tagName, startTagMatch.attrs)
        continue
      }

      // // console.log('continue:', html)

      // 在html截取后 只剩 标签的闭合为止的时候
      let endTagMatch = html.match(endTag)
      // console.log({ endTagMatch })
      if (endTagMatch) {
        advance(endTagMatch[0].length)
        onEnd(endTagMatch.tagName)
        continue
      }
    }

    if (textEnd > 0) {
      // 如果 indexOf 中的索引 大于0 则说明是一个 结束标签开始的文职 即文本的结束为止 hello</div>
      // 有文本
      let text = html.substring(0, textEnd) // 文本内容
      if (text) {
        onChars(text)
        advance(text.length) // 解析到的文本
        // console.log(333, html)
      }
    }

    function createATSElement(tag, attrs) {
      return {
        tag,
        type: ELEMENT_TYPE,
        attrs,
        children: [],
        parent: null
      }
    }

    function onStart(tag, attrs) {
      let node = createATSElement(tag, attrs) // 创造一个 ast 节点
      if (!root) {
        // 看一下是否是 空树，如果是空树 则当前是输得根节点
        root = node
      }
      if (currentParent) {
        node.parent = currentParent
        currentParent.children.push(node)
      }
      stack.push(node)
      currentParent = node // currentParent 是栈中的最后一个
    }
    function onChars(text) {
      text = text.replace(/\s/g, '')
      if (text) {
        // 文本直接 放到 当前指向的节点中
      text = text.replace(/\s/g, '') //  原意：将 超过两个以上的空格 替换为空
      // 文本直接 放到 当前指向的节点中
      text &&
        currentParent?.children.push({
          type: TEXT_TYPE,
          text,
          parent: currentParent
        })
      }
    }
    function onEnd(tag) {
      //
      stack.pop() // 将栈中的最后一个 弹出
      currentParent = stack[stack.length - 1]

      // 可以在这里校验 弹出的标签事不是 tag 是不是合法
    }
  }
  console.log(root)
  // console.log('root:',root)
  function advance(n) {
    html = html.substring(n)
  }
  function parseStartTag() {
    const start = html.match(startTagOpen)
    if (start) {
      const match = {
        tagName: start[1],
        attrs: []
      }
      advance(start[0].length)

      // 如果不是开始标签的结束就开始一直匹配下去
      let attr, end
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        // // console.log('attribute==>',html.match(attribute))
        advance(attr[0].length)
        match.attrs.push({
          name: attr[1],
          value: attr[3] || attr[4] || attr[5] || true
        })
      }

      if (end) {
        advance(end[0].length)
      }
      // console.log({ match })
      return match
    }
    return false // 不是开始标签
  }
  // console.log(555, html)
  console.log(999, root)
  return root
}
