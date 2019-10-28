const btn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");

const closeBtn = document.getElementsByClassName('closeBtn')[0];

btn.addEventListener('click', openModel);
closeBtn.addEventListener('click', closeModel);

function openModel() {
  modal.style.display = "block";
}

function closeModel() {
  modal.style.display = "none";
}

//监听window

window.addEventListener("click", outsiteClick);

function outsiteClick(e) {
  console.log(e.target);
  if (e.target == modal) {
    modal.style.display = "none";
  }
}