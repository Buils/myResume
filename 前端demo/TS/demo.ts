const arr = ['a','b','c'];
console.log('测试'+arr[0]);


let a: number = 1;
let b: string = '1';
let c: boolean = true;
let au:string | number = 1;

au = au*10

let arr1: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];
let arr3:[number,string,boolean] = [1,'2',true];
let arr4:[number,string,boolean?] = [1,'2'];

// enum 枚举
// 枚举类型是对JavaScript标准数据类型的一个补充。
// 像C#或Java等后端语言一样，使用枚举类型可以为一组数值赋予友好的名字。
// 默认情况下，从0开始为元素编号。你也可以手动的为某个成员赋值。
// enum作用是为数值赋予友好的名字
enum Color {Red,Green,Blue}
let c1: Color = Color.Red;
console.log(c1); // 0
console.log(Color[0]); // Red

// void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到其返回值类型是void
function alertName(...arrGender:number[]): void {
    console.log('arrGender',arrGender)//[1,2,3]
}
alertName(1,2,3);

function alertName2(name:string,gender:string,age?:number): void {
    console.log(`My name is ${name},gender is ${gender},age is ${age}`);
}
alertName2('Tom','men',18);
alertName2('jenny','women');

interface Person{
    name:string
    age:number
    gender?:string
    [propName:string]:any
}

interface Student extends Person{
    hobby:string
    job:string
}

const s1:Student = {name:'Tom',age:18,gender:'men',hobby:'basketball',job:'teacher'};

const p1:Person = {name:'Tom',age:18,gender:'men'};
const p2:Person = {name:'Tom',age:18};
const p3:Person = {name:'Tom',age:18,gender:'men',hobby:'basketball',job:'teacher'};

// 泛型变量
function myFn<T>(a:T,b:T,...args:T[]):T[]{
    return [a,b,...args];
}

console.log(myFn<string>('1','2'));//['1','2']
console.log(myFn<number>(1,2));//[1,2]
console.log(myFn(1,2));//[1,2]
console.log(myFn<Boolean>(true,true,true));//[true,true,true]

function hello (name:string):string;
function hello (name:number):string;
function hello(value:string | number):string{
    if(typeof value === 'string'){
        return 'hello' + value;
    }else if(typeof value === 'number'){
        return 'hello' + value;
    }else{
        return '非法格式';
    }
}
hello('abc');
hello(123);

// 函数重载
function getLength(arg:string):number;
function getLength(arg:number):number;
function getLength(arg:any):number{
    return arg.length;
}
getLength('123');
getLength(123);
// getLength(true);

// 类的定义
// 为什么要用类定义？ 因为类可以创建出具有相同属性和方法的对象。面向对象编程思想
// 例如：人，人有很多属性，如姓名、年龄、性别等，人有很多行为，如吃饭、睡觉、学习等。

class Person1{
    name:string;
    age:number;
    hobby?:string;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}
const p4 = new Person1('Tom',18);
console.log(p4);

// 类的继承
class Student1 extends Person1{
    constructor(name:string,age:number,hobby:string){
        super(name,age);
        this.hobby = hobby;
    }
}
const s2 = new Student1('Tom',18,'basketball');
console.log(s2);

// 类的修饰符
// public: 公共的，可以在类的内部和外部访问
// private: 私有的，只能在类的内部访问
// protected: 受保护的，只能在类的内部和子类中访问
// readonly: 只读的，只能在类的内部访问，不能修改
// static: 静态的，只能在类的内部访问，不能通过实例访问
// abstract: 抽象的，只能在类的内部访问，不能通过实例访问
// export: 导出的，可以在其他文件中访问
// import: 导入的，可以在其他文件中访问
class Article{
    public title:string;
    private _content:string;
    protected author:string;
    readonly createTime:number;
    static category:string;
    constructor(title:string,_content:string,author:string,createTime:number){
        this.title = title;
        this._content = _content;
        this.author = author;
        this.createTime = createTime;
    }
}
const a1 = new Article('title','content','author',123);
console.log(a1.title);
// console.log(a1.content);
// console.log(a1.author);
// console.log(a1.createTime);
console.log(Article.category);  


// 私有函数
function myFn2<T>(...args:T[]){
    console.log(...args);
}
myFn2<number>(1,2,5,4,3);//[1,2,5,4,3]
myFn2<string>('1','2','5','4','3');//['1','2','5','4','3']

function _arrSortUp(...num: number[]): number[] {  
    return num.sort((a, b) => a - b);  
}  
  
const aa = _arrSortUp(1, 3, 2, 4, 5);  
console.log(aa); // 输出: [1, 2, 3, 4, 5]

// 数组内容按字符长度排序
function _arrSortStrLength(...str: string[]): string[] {
    return str.sort((a, b) => a.length - b.length);
}
const bb = _arrSortStrLength('abc', 'defg', 'hijkl', 'mnopqr');
console.log(bb); // 输出: ['abc', 'defg', 'hijkl', 'mnopqr']


class User{
    private _password:string = "";
    get password():string{
        // return this._password;
        return '***';
    }
    set password(value:string){
        this._password = value;
    }
}

const u1 = new User();
// u1.password = '123456';
console.log(u1.password);// ***

// 抽象类
abstract class Animal{
    abstract name:string;
    abstract eat():void;
    sleep():void{
        console.log('sleep');
    }
    abstract run():void;
}

class Dog extends Animal{
    name:string = 'dog';
    eat():void{
        console.log('dog eat');
    }
    run():void{
        console.log('dog run');
    }
}

function myFn3<T extends number>(...args:T[]):T[]{
    return args.sort((a,b)=>a-b);
}
myFn<number>(1,2,5,4,3);//[1,2,3,4,5]
// myFn<string>('1','2','5','4','3');//['1','2','5','4','3']

//给我一个ts需求,10个随机数，然后排序，如果是字符串就按长度排序(如果长度一样就按首字母排序a-z)，如果是数字就按大小排序，如果是对象就按对象的某个属性排序
function sortFn<T>(...args: T[]): T[] {  
    if (typeof args[0] === 'string') {  
        // 字符串按长度排序，长度相同则按字典序排序  
        return args.sort((a, b) => a.length - b.length || a.localeCompare(b));  
    } else if (typeof args[0] === 'number') {  
        // 数字按大小排序  
        return args.sort((a, b) => a - b);  
    } else if (args.every(arg => typeof arg === 'object' && arg !== null && 'name' in arg)) {  
        // 对象按 name 属性排序，name 相同则按字典序排序  
        return args.sort((a:object, b:object) => {  
            if (a.name < b.name) return -1;  
            if (a.name > b.name) return 1;  
            return 0;  
            // 或者使用 localeCompare 进行更复杂的字符串比较  
            // return a.name.localeCompare(b.name);  
        });  
    }  
    // 如果类型不是字符串、数字或对象数组（或对象没有 name 属性），则抛出错误或返回未排序的数组  
    throw new Error('Unsupported type or missing "name" property in object');  
}  
  
// 示例用法  
console.log(sortFn(1, 2, 5, 4, 3)); // [1, 2, 3, 4, 5]  
console.log(sortFn('1', '2', '5', '4', '3')); // ['1', '2', '3', '4', '5']  
console.log(sortFn({ name: 'a' }, { name: 'C' }, { name: 'B' }, { name: 'd' })); // [{ name: 'a' }, { name: 'B' }, { name: 'C' }, { name: 'd' }]  
  
// 如果尝试传入不支持的类型或对象没有 name 属性，将抛出错误  
// console.log(sortFn(true, false)); // 抛出错误  
// console.log(sortFn({ id: 1 }, { id: 2 })); // 抛出错误，因为没有 name 属性