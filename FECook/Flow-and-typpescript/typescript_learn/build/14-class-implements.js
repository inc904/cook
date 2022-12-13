"use strict";
// extend 继承某个类，继承之后可以使用父类的方法，也可以重写父类的方法
// implements 继承某一个类，必须重写才可以使用
class Person {
    constructor() {
        this.name = 'Rose';
        this.age = 23;
        this.music = '盛夏的果实';
    }
    show() {
        console.log(`${this.name}--${this.age}--${this.music}`);
    }
}
let p = new Person();
p.show();
//  获取指定对象, 部分属性的值, 放到数组中返回
let obj = {
    name: '吴倩',
    age: 18,
    gender: true
};
function getValues(obj, keys) {
    let arr = [];
    keys.forEach(key => {
        arr.push(obj[key]);
    });
    return arr;
}
let result = getValues(obj, ['name', 'age']);
console.log(result);
let a = 'hello';
let pname = {
    name: 'string',
    age: 18
};
let pname2 = {
    name: 'string',
    age: 18
};
