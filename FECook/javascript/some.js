// some 如果有一个元素满足条件，则返回 true,剩余的元素不会在执行检测。
var ages = [3, 10, 18, 20]
var res = ages.some((item) => item > 18)
console.log(res)
