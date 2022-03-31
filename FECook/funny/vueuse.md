# VueUse

[官网](https://vueuse.org/guide.html)

VueUse 不是 Vue.use，它是为 Vue 2 和 3 服务的一套 Vue Composition API 的常用工具集，是目前世界上 Star 最高的同类型库之一。

它的初衷就是将一切原本并不支持响应式的 JS API 变得支持响应式，省去程序员自己写相关代码。

这个项目很大程度启发于 react-use。Vue Compostion API 支持了更好的逻辑分离，让这些常用的工具可以被复用，能够让你快速地构建丰富的应用。

Vue 3 的 Composition API 的一大特点是让面向关注点，有了 Composition API 的加持，通用的工具集就很容易写出来了。

也许你并不需要所有的工具，所以 按需引入 即可。

```js
import { userLocalStorage } from '@vueuse/core'
```

## useStorage 演示

[useStorage](https://vueuse.org/core/useStorage/)

让 localStorage 支持响应式。

1. 初始化

```js
let abc = userLocalStorage('abc', [1, 2, 3])
console.log(abc.value)
```

2. 修改

```js
abc.value[1] = [22]
```

注意看，我每次修改的都是 abc 变量，我根本没有操作原生 localStorage API，而且我操作的是数组，原生 localStorage 并不能直接操作数组。useLocalStorage 会返回智能解析过的值，不再是字符串，而会是数组。

执行之后，我们看看控制台的 Application 的 localStorage，里面是不是已经有一个键叫 abc，值是字符串 '[1,22,3]' 的记录。

这样我们就实现了原生 localStorage API 的响应式，而且，我们始终可以将 localStorage.abc 视为数组，尽管它在原生 JS 里是字符串。

## 如果 localStorage.abc 本身存在，执行 useLocalStorage 会发生什么？

如果 localStorage.abc 本身存在，那么执行 useLocalStorage 并传值，是无效的，得到的依然是 localStorage.abc 原本的值。

```js
let abc = useLocalStorage('abc', [1, 2, 3])
let abc1 = useLocalStorage('abc', [11, 22, 33])
```

也是一样的道理，如果 localStorage.abc 本身有值，那么第一行不会重赋值，第二行依然是不会重赋值。

## 修改值的唯一办法是操作.value

现在我们知道，重复执行 useLocalStorage 并不能修改值，如果想要修改值，必须修改.value：

- 修改数组部分元素的方法：上面演示过，abc.value[1] = 22;
- 重赋值数组的方法：abc.value = reactive([1,2,3])

## 整理自己需要的工具
