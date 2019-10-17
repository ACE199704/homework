//数组方法

const numbers = [43, 54, 56, 12, 45, 1, 7];
const numbers2 = new Array(22, 34, 56, 21, 3, 5);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, "hello", true, undefined, null, {
  a: 1,
  b: 2
}, new Date()];

let val;
//获取长度
val = numbers.length;
//检查是不是数组
val = Array.isArray(numbers);
//获取数组的单个元素
val = numbers[3];

//更改某个元素值
numbers[2] = 110;

//查找元素下标位置
val = numbers.indexOf(45);
//添加和删除
numbers.push(288);
numbers.unshift(120); //从前面加
numbers.pop(); //从后面删除
numbers.shift(); //从前面删除
numbers.splice(1, 3); //删除一段 从1开始删 删3个
//反转
numbers.reverse();

//数组拼接
val = numbers.concat(numbers2);

//数组排序
val = fruit.sort(); //按照Ascii码排序
val = numbers.sort();

//正常排序数组


//正常排序数值
console.log(numbers);
console.log(val);