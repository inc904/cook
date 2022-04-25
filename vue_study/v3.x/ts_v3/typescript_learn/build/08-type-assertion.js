"use strict";
// #TAG 类型断言
// Type Assertion 可以用来手动制定一个值的类型。
function getName(animal) {
    return animal.name;
}
// function isFish(animal: Cat | Fish) {
//   if (typeof animal.swim === 'function') {
//     return true
//   }
//   return false
// }
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
// 上面的例子中，我们声明了函数 isApiError， 用来判断传入的参数 是不是 ApiError 类型，为了实现这样一个函数，他的参数的类型肯定是比较抽象的父类 Error，这样的话这个函数就能接受 Error 或者他的自雷作为参数了。
// 利用 instanceof 完成上例
function isApiError2(error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
// ....
// ## TAG 将任何一个类型断言为 any
// 访问不存在的属性或方法时，就会报错
// const foo : number = 1
// foo.length = 1
// window.foo = 1  // window 上没有 foo 属性 会报错
// 使用 as  any 临时将 window 断言为 any 类型
window.foo = 1;
// 在 any 上访问 任何属性都是被允许的。
// 使用 any 是最后一个手段
// 【它有可能掩盖了 真正的错误，所以不是非常 确定 就不要 使用 as any】
// ## TAG 将 any 断言为一个类型
function getCacheData(key) {
    return window.cache[key];
}
const tom5 = getCacheData('tom');
tom5.run();
// 上面的例子中，我们调用完 getCacheData 之后，立即将它断言为 Cat 类型。这样的话明确了 tom 的类型，后续对 tom 的访问时就有了代码补全，提高了代码的可维护性
// ##  TAG 类型短衫的限制
/**
 * - 联合类型可以被断言为其中的一个类型
 * - 父类可以被断言成子类
 * - 任何类型都可以被断言成 any
 * - any 可以被断言成 任何类型
 */
