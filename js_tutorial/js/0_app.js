// //获取节点

// let var1;
// const list = document.querySelector('ul');
// const list2 = document.querySelector('li.lists:first-child');
// // val1 = list;

// //--------------获取子节点--------------------
// val1 = list.childNodes; //显示能看到的和不能看到的
// val1 = list.childNodes[0].nodeName;
// val1 = list.childNodes[5].nodeType;
// //节点类型
// //1 - element
// //2 - attribute
// //3 - textnode
// //8 - comment
// //9 - document
// //10 - doctype
// //获取子元素节点
// val1 = list.children;
// val1 = list.children[1];
// val1 = list.children[1].textContent;
// list.children[1].textContent = 'Hello';
// //子元素的子元素
// val1 = list.children[2].children[0];
// //获取第一个元素节点
// val1 = list.firstChild;
// //获取最后一个元素节点
// val1 = list.lastChild;
// val1 = list.lastElementChild;
// //计算节点个数
// val1 = list.childElementCount;




// //------------------------获取父集节点-------------------------
// val1 = list2;
// val1 = list2.parentNode;
// val1 = list2.parentElement;
// val1 = list2.parentNode.parentNode;




// //------------------------获取兄弟节点--------------------
// val1 = list2.nextSibling;
// val1 = list2.nextElementSibling;

// //获取上一个兄弟节点
// val1 = list2.previousElementSibling;
// val1 = list2.previousSibling;

// console.log(val1);