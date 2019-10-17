const today = new Date();
let val;
// let brithday = new Date('9-10-2019 11:30:00');
// let brithday = new Date('September 10 1988');
let brithday = new Date('9/10/1988');
val = brithday.getMonth() + 1; //只有月份要加一
val = brithday.getDate();
val = brithday.getDay(); //星期几
val = today.getHours();
val = today.getMilliseconds();
val = today.getTime();

brithday.setMonth(2);
brithday.setDate(22);
brithday.setFullYear(1922);

console.log(val);
console.log(brithday);