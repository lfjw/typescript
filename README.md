- 一门语言编译时报错，静态语言

- 一门语言运行时报错，动态语言

- 兼容 js 可以把任意想灵活的地方类型定义为 any 把 ts 变为 anyscript 就可以 保持灵活度

- ts 对类型检查的严格程度，可以通过 tsconfig.json 配置

- ts 并不是类型定义本身，而是类型定义的形状

- ts 结构类型系统

# 安装 ts-node

<<<<<<< HEAD
- window可以使用 `Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned`来解决禁止运行脚本

=======
>>>>>>> 41fc57ae73b567db64d4b23f5aa7038d3fcec43b
- https://www.npmjs.com/package/ts-node

- npm install -g ts-node

- ts-node -v 查看版本

# 安装 typescript

- https://www.npmjs.com/package/typescript

- npm install -g typescript

- npm update -g typescript 更新版本

- tsc -v 查看版本

# 初始化 ts 项目

- tsc --init

* tsconfig.json

```js

{
  "compilerOptions": {
    "target": "es5",                            // 指定 ECMAScript 目标版本: 'ES5'
    "module": "commonjs",                       // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "moduleResolution": "node",                 // 选择模块解析策略
    "experimentalDecorators": true,             // 启用实验性的ES装饰器
    "allowSyntheticDefaultImports": true,       // 允许从没有设置默认导出的模块中默认导入。
    "sourceMap": true,                          // 把 ts 文件编译成 js 文件的时候，同时生成对应的 map 文件
    "strict": true,                             // 启用所有严格类型检查选项
    "noImplicitAny": true,                      // 在表达式和声明上有隐含的 any类型时报错
    "alwaysStrict": true,                       // 以严格模式检查模块，并在每个文件里加入 'use strict'
    "declaration": true,                        // 生成相应的.d.ts文件
    "removeComments": true,                     // 删除编译后的所有的注释
    "noImplicitReturns": true,                  // 不是函数的所有返回路径都有返回值时报错
    "importHelpers": true,                      // 从 tslib 导入辅助工具函数
    "lib": ["es6", "dom"],                      // 指定要包含在编译中的库文件
    "typeRoots": ["node_modules/@types"],
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [                                  // 需要编译的ts文件一个*表示文件匹配**表示忽略文件的深度问题
    "./src/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "**/*.test.ts",
  ]
}
```

- 中文解释

```js 

{

“编译器选项”：{
/*基本选项*/
//“增量”：true，/*启用增量编译*/
“target”：“es5”，/*指定ECMAScript目标版本：“ES3”（默认）、“es5”、“ES2015”、“ES2016”、“ES2017”、“ES2018”、“ES2019”或“ESNEXT”*/
“module”：“commonjs”，/*指定模块代码生成：“none”、“commonjs”、“amd”、“system”、“umd”、“es2015”或“ESNext”*/
//“lib”：[]，/*指定要包含在编译中的库文件。*/
//“allowJs”：true，/*允许编译javascript文件。*/

//“checkJs”：true，/*报告.js文件中的错误。*/

//“jsx”：“preserve”，/*指定jsx代码生成：“preserve”、“react native”或“react”。*/

//“declaration”：true，/*生成相应的.d.ts”文件。*/

//“declarationMap”：true，/*为每个对应的“.d.ts”文件生成一个sourcemap*/

//“sourceMap”：true，/*生成相应的“.map”文件。*/

//“outFile”：“../”，/*连接并将输出发送到单个文件。*/

//“outDir”：“../”，/*将输出结构重定向到目录。*/

//“rootDir”：“../”，/*指定输入文件的根目录。用于使用--outDir控制输出目录结构。*/

//“composite”：true，/*启用项目编译*/

//“tsBuildInfoFile”：“../”，/*指定存储增量编译信息的文件*/

//“removeComments”：true，/*不向输出发出注释。*/

//“noEmit”：true，/*不发出输出。*/

//“Import helpers”：true，/*从“tslib”导入emit helpers。*/

//“downlevelIteration”：true，/*在针对“ES5”或“ES3”时，在“for of”、“spread”和“destructuring”中为iterables提供完全支持。*/

//“isolatedModules”：true，/*将每个文件作为单独的模块（类似于“ts.Transpile module”）进行传输。*/



/*严格类型检查选项*/

“strict”：true，/*启用所有严格类型检查选项。*/

//“noImplicitAny”：true，/*对隐含“any”类型的表达式和声明产生错误。*/

//“strict null checks”：true，/*启用严格的空检查。*/

//“strictFunctionTypes”：true，/*启用对函数类型的严格检查。*/

//“strictBindCallApply”：true，/*对函数启用严格的“bind”、“call”和“apply”方法。*/

//“strictPropertyInitialization”：true，/*启用类中属性初始化的严格检查。*/

//“noImplicitThis”：true，/*对隐含“any”类型的“this”表达式引发错误。*/

//“alwaysStrict”：true，/*以严格模式解析，并为每个源文件发出“use strict”。*/



/*附加支票*/

//“noUnusedLocals”：true，/*报告未使用的局部变量的错误。*/

//“noUnusedParameters”：true，/*报告未使用参数的错误。*/

//“noImplicitReturns”：true，/*函数中并非所有代码路径都返回值时报告错误。*/

//“noFallthroughCasesInSwitch”：true，/*在switch语句中报告fallthrough情况的错误。*/



/*模块分辨率选项*/

//“moduleResolution”：“node”，/*指定模块解析策略：“node”（node.js）或“classic”（TypeScript pre-1.6）。*/

//“baseUrl”：“../”，/*用于解析非绝对模块名的基目录。*/

//“paths”：{}，/*将导入重新映射到相对于‘baseUrl’的查找位置的一系列条目。*/

//“rootDirs”：[]，/*根文件夹列表，其组合内容表示运行时项目的结构。*/

//“typeRoots”：[]，/*要包含其类型定义的文件夹列表。*/

//“types”：[]，/*要包含在编译中的类型声明文件。*/

//“allowSyntticDefaultImports”：true，/*允许从没有默认导出的模块进行默认导入。这不会影响代码发出，只会影响类型检查。*/

“esModuleInterop”：true，/*通过为所有导入创建命名空间对象，实现CommonJS和ES模块之间的互操作性表示“AllowSyntticDefaultImports”。*/

//“preserveSymlinks”：true，/*不解析符号链接的实际路径。*/

//“allowumddglobalaccess”：true，/*允许从模块访问UMD globals。*/

/*源映射选项*/

//“sourceRoot”：“，”/*指定调试器应定位TypeScri的位置
```


# package.json 编译
```js
{
  "name": "ts-study",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "build": "tsc", // 编译
    "build:w": "tsc -w" // 监听文件，有变动即编译
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "TypeScript ": "^3.6.4"
  }
}
```





```js
exports.a = 'a'
module.exports = 'a'

let a = require('./a')
```

```js
import {a,b} from './a'
export const a = b
export default a
```


