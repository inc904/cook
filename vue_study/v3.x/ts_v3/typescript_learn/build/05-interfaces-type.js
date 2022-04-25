"use strict";
/*
# TAG 对象的类型--接口
typescript 中 使用 接口（interface）来定义对象的类型
接口： 对行为的抽象，而具体如何行动需要由类 classes 去实现 implement
1. 除了对类的一部分内容进行抽象
2. 也用于对 【对象的形状 shape 】进行描述
3. 接口一般 【首字母大写】，有的编程语言会建议在接口的名称前面加上 I 前缀
*/
let tom = {
    name: 'tom',
    age: 34
};
// let jerry: Person2 = {
//   name: 'jerrt'
// } // 报错： 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person2" 中需要该属性。
// 定义的变量比接口 多了一些属性是不也允许的
let rose = {
    name: 'rose',
    age: 25,
    // gender: 'male'// 报错： “gender”不在类型“Person2”中
};
let cat = {
    name: 'mimi',
    age: 1
};
let dog = {
    name: 'wangwang',
};
let dog2 = {
    name: 'wangwang',
    // gender: 'male' //不允许添加未定义的属性
};
let ming = {
    name: 'xiaoming',
    age: 18,
    gender: 'female'
};
// let tom4: Person4 = {
//   name: 'Tom',
//   age: 18
// } // 定义 tom 的时候 米有id  报错
// tom4.id = 18 // 定义后 尝试给 readonly 属性 赋值，报错
