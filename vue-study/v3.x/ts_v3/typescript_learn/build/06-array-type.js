"use strict";
// # TAG 数组的类型
// ## 类型 + 方括号
let fibonacci = [1, 1, 2, 3, 5];
// let fibonacci2: number[] = [1, 1, 2, '3', 5] // 报错
// ## 数组泛型
// 数组泛型 Array Generic ， Array<elemType> 来表示数组
let fibonacci3 = [1, 1, 2, 3, 5];
let fibonacci4 = [1, 1, 2];
// 类数组
//  Array-like Object 不是数组类型，比如 arguments
function sum() {
    let args = arguments;
}
// 类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 24 项。
// arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口
function sum2() {
    let args = arguments;
}
// ## any 在数组中的应用
// 用 any 表示数组中 允许出现 任意类型
let list = ['hahaah', 123, true, {}];
