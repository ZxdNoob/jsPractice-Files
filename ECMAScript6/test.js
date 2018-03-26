let x = 1;                                  //let代替了var，let没有声明提前的特性，专门负责一个作用域
let fn = (a,b) => console.log(a+b);
console.info(x);
fn(2,7);
let name = "小明";
let sex = "男";
let person1 = {
    name,
    sex
};
console.log(person1);
const pi = 3.141593;                        //常量声明关键字const
let r = 26;
let circleP = 2*pi*r;
console.log(circleP);
let myArr = ["one","two","three","four","five","five","six","six"];
let mySet = new Set(myArr);
let mySet2 = new Set([1,2,3,4,4,5,3,34,34]);//set是一个不重复的集合，类似于数组，但是又不是数组，可以用来数组去重
console.log(mySet,mySet2);
let argArr = [1,2];
let sum = (sum1,sum2) => console.log(sum1+sum2);
sum(...argArr);                 //使用了扩展运算符，这里的...argArr相当于argArr[0],argArr[1]