const lf = document.querySelector('.left');
const rt = document.querySelector('.right');
const content = document.querySelector('.container');

lf.addEventListener("mouseenter", () => {
  content.classList.add('hover-lf');
});
lf.addEventListener("mouseleave", () => {
  content.classList.remove('hover-lf');

});
rt.addEventListener("mouseenter", () => {
  content.classList.add('hover-rt');
});
rt.addEventListener("mouseleave", () => {
  content.classList.remove('hover-rt');

});