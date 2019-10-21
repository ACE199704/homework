// 事件监听 和 事件对象

// //方法一
// document.querySelector(".delAll").addEventListener("click", function(e) {
//   console.log(e);
//   // e.defaultPrevented();
// });

// //方法二
// document.querySelector(".delAll").addEventListener("click", onClick); //定义一个函数

// function onClick(e) {
//   let val;
//   val = e.target;
//   val = e.target.className;
//   val = e.target.classList;

//   // Event type
//   val = e.type;
//   //TimeStamp
//   val = e.timeStamp;
//   //鼠标坐标点
//   val = e.clientX;
//   val = e.clientY;
//   console.log(val);
// }
