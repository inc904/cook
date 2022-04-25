"use strict";
/*
  # TAG 类型推论

  如果没有明确的指定类型，那么 typescript 会依照类型推论（type inference）的规则推断出一个类型

 */
let myGender = 'male';
// myGender = 1 // 不能将类型“number”分配给类型“string”。
// 等价于
let yourGender = 'female';
// yourGender = 0
/*
1、 typescript 会在没有明确的指定类型的时候 推测出一个类型，这就是类型推论
2、如果在定义的时候没有赋值，不管之后有没有赋值，都会被腿短成 any 类型 而完全不会被 类型检查

*/
