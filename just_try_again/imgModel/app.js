const [current, imgs] = [document.querySelector(".img-lg img"), document.querySelectorAll(".img-sm img")];

imgs.forEach(img => img.addEventListener("click", (e) => {
  current.src = e.target.src;
  current.classList.add('fade-in');
  setTimeout(() => current.classList.remove('fade-in'), 500);
  imgs.forEach(img => img.style.opacity = 1);
  e.target.style.opacity = 0.4;

}))