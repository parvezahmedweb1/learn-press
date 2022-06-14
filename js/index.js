const menu = document.querySelector("#menu-icon");
const navber = document.querySelector(".navber");
const header = document.querySelector("header");
// sticky navber
window.addEventListener("scroll", function () {
  header.classList.toggle("header-shadow", window.scrollY > 0);
  navber.classList.remove("open-nav");
});
// menu open
menu.addEventListener("click", function () {
  navber.classList.toggle("open-nav");
});
