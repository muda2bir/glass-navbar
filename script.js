const hamburger = document.querySelector(".hamburger");
const hamburger_close = document.querySelector(".hamburger-close");
const nav_list = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  nav_list.classList.add("active");
});

hamburger_close.addEventListener("click", () => {
  nav_list.classList.remove("active");
});
