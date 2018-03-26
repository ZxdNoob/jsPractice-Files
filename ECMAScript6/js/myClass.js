//回顾ES中使用构造函数的方式创建类
/*function Person(name,job,sex){
    this.name = name;
    this.job = job;
    this.sex = sex;
}

Person.prototype = {
    constructor:Person,
    print(){
        console.log("我叫"+this.name+"，性别："+this.sex+"，工作是"+this.job);
    }
};

var per1 = new Person("左信道","web前端工程师","男");
per1.print();
var per2 = new Person("张仙红","贤妻良母","女");
per2.print();

console.log(per1);
console.log(per2);
console.log(per1.constructor);*/
//ES6类的方式
class Person{
    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    print(){
        console.log("我叫"+this.name+"，今年"+this.age+"了，性别："+this.sex);
    }
}
let person1 = new Person("张飞",26,"男");
person1.print();

class Student extends Person{
    constructor(name,age,sex,project){
        super(name,age,sex);
        this.project = project;
    }
}
let st1 = new Student("龚小明",27,"男","语文");
console.log(st1);