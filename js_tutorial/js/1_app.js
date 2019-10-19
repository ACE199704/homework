//Windows 的方法 对象 属性
// window.console.log("Hello");

//alert
// window.alert("Hello");

// //prompt
// const input = prompt();
// alert(input);

//confirm
// if (confirm("Are you sure?")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

let val;

//窗口大小
val = window.outerWidth;
console.log(val);

//可视区域大小
val = window.innerWidth;
console.log(val);

//滚动大小
val = window.scrollY;
console.log(val);

//location
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
// window.location.href = "http://www.baidu.com";
//Reload
// window.location.reload();

// //History
// window.history.go(-1);
// val = window.history.length;

//Navigator
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.language;

console.log(val);
