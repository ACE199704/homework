//if switch

//if 分支语句

//条件： 关系运算符 逻辑运算符 最终结果为布尔值
//关系运算符： > < >= == <= != === !== [ ===不但判断值 也会判断类型 ]
//逻辑运算符： &&(AND) ||(OR) !(取反)

let id = "100";

if (id !== 100) {
  console.log("条件为真");
} else {
  console.log("条件为假");
}

// let idd = 100;
//Test 分支条件是否为undefined
if (typeof idd !== "undefined") {
  console.log(`ID是${idd}`);
} else {
  console.log("没有设置ID");
}

const name = "Steve";
const age = 14;
if (age > 0 && age <= 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adault`);
}
//三目运算符

console.log(id === 100 ? "correct" : "Incorrect");

//switch
const color = "yellow";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "yellow":
    console.log("color is yellow");
    break;
  default:
    console.log("color is unkown");
    break;
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sun";
    break;
  case 1:
    day = "Mon";
    break;
  case 2:
    day = "Tues";
    break;
  case 3:
    day = "Weds";
    break;
  case 4:
    day = "Thri";
    break;
  case 5:
    day = "Fri";
    break;
  case 6:
    day = "Sat";
    break;
  default:
    break;
}
console.log(day);
