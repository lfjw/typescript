
// 无法重新声明块范围变量“name”。ts(2451)
// 如果代码里有export import 之类的代码，那么这个文件会变成一个模块，变量变成一个私有变量
export {}

// 一 字符串
let name : string = 'jw' // 全局已经声明name


// 二 数字
let age : number = 10

// 三 布尔
let married : boolean = true;

// 四 字符串数组
let hobbis: string[] = ['篮球','足球']  // 字符串数组
let interests: Array<string>  = ['4','5'] // 字符串数组另一种写法

// 五 元组
// 元组 类似一个数组，它是一个长度和类型都固定的数组
// 特点：1.长度固定，2.类型可以不一样
let point: [number, number] = [100, 200]
point[0], point[1]
let person: [string, number] = ['jw', 28]

// 六 枚举类型
enum Gender {
    BOY,
    GRIL
}
console.log(`李雷是${Gender.BOY}`)
console.log(`莉莉是${Gender.GRIL}`)
enum week {
    MON = 1,
    TUS = 2
}

// 常数枚举
const enum Color{
    Red,
    Yello,
    Blue,
}
console.log(Color.Red, Color.Yello, Color.Blue);

// 七 任意类型 anyscript
// 第三库没有类型定义，类型转换的时候，数据结构太复杂太灵活 any
// ts 为dom 提供了

let root: HTMLElement | null= document.getElementById("root")
root!.style.color = 'red' // ! 【断言】我可以保证他不为空


 // 八 null undefined
 // null 空  undefined 未定义
 // 它们都是其他类型的子类型，你可以把他们赋值给其他类型的变量
let myname1: string | null = null; //不能将类型“null”分配给类型“string”。 解决方案：更改 strictNullChecks为false;可以把null 赋值给任何类型
let myname2: string | undefined = undefined;

// 九 void类型 空的 没有

function gressting(name: string ):void {
    console.log(`hello${name}`);   
    //return 1 //不能将类型“1”分配给类型“void” 
    //return null 
    return undefined  //strictNullChecks 改为false 报错
}

gressting('jw')

// 十 nerver 永远不
// never 是其他类型的子类型，代表不会出现的值

//返回“从不”的函数不能具有可访问的终结点。
// 在函数内永远会抛出错误，导致函数无法正常结束
function cratreError (message: string ) : never{
    throw new Error('error')
    //检测到无法访问的代码。
    console.log('end point');
}

function sum () {
    while(true){
        console.log('hellow');
        
    }
    //检测到无法访问的代码。
    console.log('end point');
    
}


// | 
// || 
// & 
// &&


// 十一 类型推论 猜

let name2 = 2
name2 = 4
name2 = 5
let nam3
nam3 = 4
nam3 = 'jw'

// 十二 包装对象【java 装箱拆箱】 自动在基本类型和对象类型之间切换

// 1 基本类型上没有方法
// 2在内部迅速完成一个装箱操作，把基本类型迅速包装成对象类型，然后用对象来调用方法
let name4:string ='jw'
name4.toLocaleLowerCase()

// let name44 = new String(name44)
// name44.toLocaleLowerCase()

// let isok3 : bollean = new String() // 不能赋值给对象

// 联合类型 字符串或者数字
// let name6: string | number ;
// (name6 as string).toLocaleLowerCase()


let Gender10 : 'boy' | 'girl'
Gender10 = 'boy'


// nerver使用场景
// 死循环  事件循环 计划任务
// 单元测试

