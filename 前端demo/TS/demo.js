"use strict";
const arr = ['a', 'b', 'c'];
console.log('测试' + arr[0]);
let a = 1;
let b = '1';
let c = true;
let au = 1;
au = au * 10;
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [1, '2', true];
let arr4 = [1, '2'];
// enum 枚举
// 枚举类型是对JavaScript标准数据类型的一个补充。
// 像C#或Java等后端语言一样，使用枚举类型可以为一组数值赋予友好的名字。
// 默认情况下，从0开始为元素编号。你也可以手动的为某个成员赋值。
// enum作用是为数值赋予友好的名字
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c1 = Color.Red;
console.log(c1); // 0
console.log(Color[0]); // Red
// void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到其返回值类型是void
function alertName(...arrGender) {
    console.log('arrGender', arrGender); //[1,2,3]
}
alertName(1, 2, 3);
function alertName2(name, gender, age) {
    console.log(`My name is ${name},gender is ${gender},age is ${age}`);
}
alertName2('Tom', 'men', 18);
alertName2('jenny', 'women');
const s1 = { name: 'Tom', age: 18, gender: 'men', hobby: 'basketball', job: 'teacher' };
const p1 = { name: 'Tom', age: 18, gender: 'men' };
const p2 = { name: 'Tom', age: 18 };
const p3 = { name: 'Tom', age: 18, gender: 'men', hobby: 'basketball', job: 'teacher' };
// 泛型变量
function myFn(a, b, ...args) {
    return [a, b, ...args];
}
console.log(myFn('1', '2')); //['1','2']
console.log(myFn(1, 2)); //[1,2]
console.log(myFn(1, 2)); //[1,2]
console.log(myFn(true, true, true)); //[true,true,true]
function hello(value) {
    if (typeof value === 'string') {
        return 'hello' + value;
    }
    else if (typeof value === 'number') {
        return 'hello' + value;
    }
    else {
        return '非法格式';
    }
}
hello('abc');
hello(123);
function getLength(arg) {
    return arg.length;
}
getLength('123');
getLength(123);
// getLength(true);
// 类的定义
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p4 = new Person1('Tom', 18);
console.log(p4);
