"use strict";
// 函数定义
function hello(name) {
    console.log('hello' + name);
}
// 没有返回值 type jType = (f: string, l :string)  => void;
// 函数表达式
var j = function (f, l) {
    return f + l;
};
// 可选参数
// function print (name: string, age: number, home ? : string) {
// }
// print('jw', 10)
// 默认参数
function aja(url, method) {
    if (method === void 0) { method = 'get'; }
}
aja('/user');
// 剩余参数
function sum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (accu, item) { return accu + item; }, 0);
}
// 函数重载
// 更精确 
var obj = {};
function attr(val) {
}
attr('jw');
var d = function (ms) {
    console.log(ms);
};
// nest + graphql 微服务
