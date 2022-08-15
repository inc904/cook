function params2Obj(url) {
    var search = url.split('?')[1];
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
var url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=vue%20%E6%BA%90%E7%A0%81%20hello&oq=vue%2520%25E6%25BA%2590%25E7%25A0%2581&rsv_pq=9c1abe270004f460&rsv_t=889ba73c%2FnAzh0kRDnWxXYVieNt3SNHq3adfSxJuCxB1uXR8ITyr6d%2FdgXE&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=7&rsv_sug1=7&rsv_sug7=100&rsv_sug2=0&rsv_btype=t&inputT=1237&rsv_sug4=1834';
var res = params2Obj(url);
console.log('res', res);
