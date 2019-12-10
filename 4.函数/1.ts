// 函数定义

function hello (name: string) : void {
    console.log('hello' + name);   
}

//type 用来定义一个类型
type jType = (f: string, l :string)  => string; // => 不是箭头函数 分隔符 => 前面是参数，后面是返回值
// 没有返回值 type jType = (f: string, l :string)  => void;

// 函数表达式
let j : jType = function (f: string, l: string) : string{
    return f + l
}

// 可选参数

// function print (name: string, age: number, home ? : string) {

// }
// print('jw', 10)



// 默认参数

function aja (url:string, method: string = 'get') {

}

aja('/user')


// 剩余参数
function sum (...num: Array<number>) {
    return num.reduce((accu, item)=> accu+ item, 0 )
}



// 函数重载
// 更精确 

let obj: any = {}

function attr(val: string) : void;
function attr(val: number) :void;
function attr( val: any) : void {

}

attr('jw')


// ts 箭头函数和Jscript是一样的
type dTYpe= (ms: number) => void
let d:dTYpe = (ms: number) => {
    console.log(ms);
}

// nest + graphql 微服务
















