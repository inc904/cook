"use strict";
// #TAG 类型断言
// Type Assertion 可以用来手动制定一个值的类型。
function getName(animal) {
    return animal.name;
}
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function isFish2(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
// 【类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：】
function swim(animal) {
    animal.swim();
}
const jerry = {
    name: 'Jerry',
    run() { console.log('run'); }
};
swim(jerry);
// Uncaught TypeError: animal.swim is not a function`
// 上面的例子编译时不会报错，但在运行时会报错：
// 原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。
// 总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误
// ### TAG 将一个父类断言为更加具体的子类
// 当类之前有继承关系时，类型断言也是很常见的。
class ApiError extends Error {
    constructor() {
        super(...arguments);
        this.code = 0;
    }
}
class HttpError extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 200;
    }
}
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
