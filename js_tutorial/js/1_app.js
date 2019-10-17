const person = {
  firstName: 'Ace',
  lastName: 'Luo',
  age: 22,
  email: 'ace199704@icloud.com',
  hobbies: ['music', 'sports'],
  adress: {
    city: 'Beijing',
    state: 'zhaoyang'
  },
  getBirthday: function () {
    return 2019 - this.age;
  }
};

let val;

val = person;
//获取单个属性
val = person.firstName;
//或者
val = person['lastName'];
val = person.email;
val = person.adress.city;
val = person.getBirthday();
console.log(val);
//数组对象嵌套
const people = [{
    name: 'Buckuy',
    age: 23
  },
  {
    name: 'Henry',
    age: 30
  },
  {
    name: 'Elyse',
    age: 20
  }
];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}