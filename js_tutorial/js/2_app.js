// //获取单个元素对象 document.getElementById()

// // console.log(document.getElementById(
// //   'task-title').id);

// const taskTitle = document.getElementById('task-title');
// //改变样式
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';

// //改变内容
// taskTitle.textContent = 'ao';
// taskTitle.innerText = 'sss';
// taskTitle.innerHTML = '<span>colse</span>'

// //document.querySelector

// // let task = document.querySelector('#task-title');
// // task = document.querySelector('li');
// // task.style.color = 'blue';
// // task = document.querySelector('li:last-child');
// // task.style.color = 'blue';
// task = document.querySelector('li:nth-child(4)');
// task.textContent = 'Hello';
// task = document.querySelector('li:nth-child(odd)');
// task.style.color = 'red'; //也只是第一个变化了。

//获取多个元素对象

// 1、document.getElementsByClassName()
// const items = document.getElementsByClassName('lists');
// console.log(items);
// console.log(items[0]);

//严谨获取
// const listItems = document.querySelector('ul').getElementsByClassName('lists');
// console.log(listItems);
// // 2、document.getElementsByTagName()
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// //因为此时lis不是数组，只是html，所以需要转换为数组才能使用数组方法
// lis = Array.from(lis);
// lis.reverse(); //数组方法
// console.log(lis);

// lis.forEach(function (li, index) {
//   li.textContent = `${index}:hello`;
// })

//3、document.querySelectorAll()
let its = document.querySelectorAll("ul li");
console.log(its);

its.forEach(function (lis, index) {
  lis.textContent = `${index}:hello!  !`
})
//基数偶数改变
const lis = document.querySelectorAll('li:nth-child(odd)');
lis.forEach(function (lis, index) {
  lis.style.background = '#ccc';
});