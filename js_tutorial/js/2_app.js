//键盘事件

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('#task-title');
const select = document.querySelector('#selector');

form.addEventListener('submit', runEvent);
//clear input 
taskInput.value = '';
// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// //focus
// taskInput.addEventListener('focus', runEvent);
// //blur
// taskInput.addEventListener('blur', runEvent);
// // cut 剪切
// taskInput.addEventListener('cut', runEvent);
// //paste 粘贴
// taskInput.addEventListener('paste', runEvent);

//input
taskInput.addEventListener('input', runEvent);
//change 事件
select.addEventListener('change', runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log(`Event Type: ${e.type}`);
  // console.log(taskInput.value);
  heading.textContent = e.target.value;
}