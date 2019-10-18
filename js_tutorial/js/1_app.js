//for循环
/** 
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

//while循环
/** 
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
*/

//do while 循环
/** 
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
*/

//对于数组循环
/** 
cars = ["ford", "BWM", "audi", "sansumg"];
for (let a = 0; a < cars.length; a++) {
  console.log(cars[a]);
}
//forEach 语句
cars.forEach(function(car, index, array) {
  console.log(car);
  console.log(index);
  console.log(array);
});
*/

//map
const users = [
  { id: 1, name: "assd" },
  { id: 2, name: "suhhdu" },
  { id: 3, name: "sauhau" },
  { id: 4, name: "ashuhd" },
  { id: 5, name: "asn" }
];

const names = users.map(function(user) {
  return user.name;
});
console.log(names);
const ids = users.map(function*(user) {
  return user.id;
});
console.log(ids);

//------------important---------------
//遍历对象
const people = {
  firstName: "Jonn",
  lastName: "Doe",
  age: 40
};
for (let x in people) {
  console.log(`${x}:${people[x]}`);
}
//------------important---------------
