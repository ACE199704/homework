var a = 1;
let b = 2;
const c = 3;

for (var a = 0; a < 10; a++) {
  console.log(a);
  let b = 20;
  console.log(b);
  const c = 30;
  console.log(c);
}
console.log(a, b, c);

let val;
val = document.all;
console.log(val);
