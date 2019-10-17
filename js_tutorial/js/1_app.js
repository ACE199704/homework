const name = 'john';
const age = 31;
const job = 'Web Developer';
const city = 'Beijing';

//没有模版字符串 （es5）

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';


function hello() {
  return 'hello';
}
//模版字符串展示（es6） 键盘1的左边
html = `
<ul>
  <li>1/Name:${name}</li>
  <li>Age:${age}</li>
  <li>Job:${job}</li>
  <li>City:${city}</li>
  <li>${2+2}</li>
  <li>${hello()}</li>
  <li>${age>30?'Over 30':'Under 30'}</li>
</ul>
`
document.body.innerHTML = html;