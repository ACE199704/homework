//类型转换
let val;
let num;
//Number to string
val = String(533);
// val = String(4 + 4);

//Date to String
val = String(new Date());

//Array to String
val = String([1, 2, 3, 4]);
//toString()
val = (555).toString();
val = true.toString();
//String to Number
num = Number('5');
//Bool to Number
num = Number(true);
//null to Number
num = Number(null);
//NAN
num = Number('hello');
//另一种形式：
num = parseInt('199');
num = parseInt('199.10');
num = parseFloat('199.10');



//输出
console.log(val);
console.log(typeof val);
//字符串的长度，val.length，number类型的话没有这个函数
console.log(val.length);
console.log(num);

console.log(num.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);