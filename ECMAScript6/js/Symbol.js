//产生背景：ES5中对象的属性局限于字符串数据类型，字符串数据类型的属性名容易造成命名冲突
//Symbol是ES6中新的原始数据类型，表示独一无二的值
//创建
let mySymb = Symbol();
let mySymb2 = Symbol();
console.log(mySymb);
console.log(mySymb === mySymb2);            //返回false，说明Symbol是独一无二的
let tOf = (val) => console.log(typeof val);
tOf(mySymb);                                //Symbol值属于symbol数据类型
//作为对象的属性名可以解决对象属性名命名冲突问题
let obj = {};
obj[Symbol("name")] = "ZXD";
obj[Symbol("name")] = "ZXH";
console.log(obj);