//函数定义

//无返回值 无参数
function hello() {
  console.log("hello");
}
//又返回值 无参数
function greet() {
  return { a: 1, b: 2 };
}
//有参数 无返回值
function greet1(name = "Mini") {
  console.log("Hello " + name);
}
//有参数 又返回值
function greet2(name = "Mini") {
  return "Hello" + name;
}
//函数调用
hello();
console.log(greet());
greet1();
console.log(greet2());

//函数表达式
const squar = function(x) {
  return x * x;
};

console.log(squar(10));
//------------------important--------------------
//------------------important--------------------
//自执行函数
(function(name) {
  console.log("自执行函数" + name);
})("hhhh");

//属性函数
const todo = {
  add: function() {
    console.log("Add to do...");
  },
  edit: function() {
    console.log("Edit to do...");
  }
};

todo.delete = function() {
  console.log("delete to do...");
};
todo.add();
todo.delete();

//------------------important--------------------
//------------------important--------------------
