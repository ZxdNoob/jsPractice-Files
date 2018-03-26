//set
//特点：类似于数组，没有重复元素（每个元素是惟一的），key和value是相等的
//一个属性，四个方法
//一个属性——size
let mySet = new Set(['I' ,'love','you','ZhangXianhong']);//填充方式：在圆括号中置入一个中括号表示一个数组，像平常数组一样在里面添加元素
console.log(mySet);
let setSize = mySet.size;               //元素的个数
console.log(setSize);
//四个方法——add()  可以链式操作进行多个元素的添加
// let add = mySet.add("张学友");   //返回执行方法后的set集合
// console.log(add);
// console.log(mySet);
// 四个方法——delete()
// let theDel = mySet.delete("I");           //删除一个元素，返回的是布尔值，true代表删除成功
// console.log(theDel);
// console.log(mySet);
// 四个方法——has()
// let hasE = mySet.has("I");                //判断set集合中是否有钙该元素，有就返回true，否则返回false
// console.log(hasE);
// 四个方法——clear()
// let theClear = mySet.clear();               //清空集合set，无返回值，得到的是undefined
// console.log(theClear);
// let setKeys = mySet.keys();                 //获取set集合中的所有属性
// console.log(setKeys);
// let setVal = mySet.values();                //获取set集合中的所有属性值
// console.log(setVal);

//map
//特点：是一个超级版对象，因为它的属性数据类型不局限于字符串类型
//创建        new Map([[]])
let myMap = new Map([
    ["name","赵云"],                  //属性与属性值之间用逗号隔开
    ["age",100],
    ["address","杭州"]
    ]);
console.log(myMap);
/*let arr = ["左信道","张仙红","左若希"];
let other = [1,2,...arr];
console.log(other);*/
/*//set和get
let mapSet = myMap.set({"name":"ZuoXindao"},"左信道");                //添加map数据对象的属性和属性值
console.log(mapSet);
let mapSize = myMap.size;
console.log(mapSize);
let mapGet = myMap.get("name");                 //获取对象的键对应的值
console.log(mapGet);
//delete
let mapDel = myMap.delete("age");               //删除键值对，返回布尔值，删除成功就返回true
console.log(mapDel);
//has
let mapHas = myMap.has("name");                 //判断是否存在该属性，返回布尔值，存在则返回true
console.log(mapHas);
//clear
let mapClear = myMap.clear();                   //清空map，无返回值，所以输出的是undefined
console.log(mapClear);
//keys()、values()和entries()
let mapKs = myMap.keys();
console.log(mapKs);
let mapVs = myMap.values();
console.log(mapVs);
let mapEs = myMap.entries();
console.log(mapEs);*/
//使用forEach遍历map
myMap.forEach( function(value, key) {
    console.log("属性："+key+"  属性值："+value);
});