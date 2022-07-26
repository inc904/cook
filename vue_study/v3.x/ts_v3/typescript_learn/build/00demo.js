"use strict";
function params2Obj(url) {
    const search = url.split('?')[1];
    if (!search)
        return {};
    // let temp = decodeURIComponent(search)
    //     .replace(/"/g, '\\"')
    //     .replace(/&/g, '","')
    //     .replace(/=/g, '":"')
    //     .replace(/\+/g, ' ')
    // console.log('temp', temp);
    // return JSON.parse(`{"${temp}"}`)
    return JSON.parse('{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"')
            .replace(/\+/g, ' ') +
        '"}');
}
let url = 'https://www.baidu.com/s?ie=UTF-8&wd=JSON.parse';
let res = params2Obj(url);
console.log('res', res);
