//var let const

//定义变量
// var name = "变量所存储的值";
// console.log(name);
// name = "wo";

// //初始化var
// var greeting;
// //数组和对象 对于const而言 里面的属性或者值是可以修改的
// const person = {
//   name: "luo",
//   age: 22
// };
// person.age = 23;
// person.name = "Ace";
// console.log(person);
// const numberb = [1, 2, 3, 4, 5];
// numberb.push(6);
// console.log(numberb);

//数据类型
/**
 * 1.基本数据类型
 * String(字符串) Number(数值) Bollean(布尔) Null(空) Undefined(未定义) Symbol(符号)
 * 2.引用数据类型
 * Object(对象)
 */
//String
const name = "hello";
console.log(typeof name);
const age = 45;
const haskid = true;
const car = null;
let test;
const sym = Symbol();

//引用数据类型
//数组
const hobbis = ["movies", "music", 46, true];
//对象
const address = {
  city: "beijing",
  state: "changping"
};
//日期对象
const today = new Date();
console.log(today);
