const firstName = 'wliiam';
const lastName = 'jonn';
let val;
const str = "Hello there my name is ";
const tags = "Hello,there my,name,is ";
val = firstName + ' ' + lastName;

//append
val = 'Herry';
val += ' Wu';

//转义
val = 'That\'s awesome, i can\'t wait';
val = "That's awesome, i can't wait";
//length
val = firstName.length;
//concat 拼接
val = firstName.concat(' ', lastName);
//大小写转化
val = firstName.toUpperCase();
val = firstName.toLowerCase();
//字符串下标
val = firstName[0];
// indexof
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt
val = firstName.charAt('2');
//获取最后一个字符
val = firstName.charAt(firstName.length - 1);


//获取子字符串
val = firstName.substring(0, 4); //从0开始 有4个  
//slice
val = firstName.slice(0, 4);
val = firstName.slice(-3); //可以为负数，就是从最后拿掉三个

//转数组split
val = str.split(" ");
val = tags.split(",");


console.log(val);