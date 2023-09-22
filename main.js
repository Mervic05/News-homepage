window.onload;
const menuOpen = document.querySelector(".menu_open");
const menuClose = document.querySelector(".menu_close");
const mobileMenu = document.querySelector(".header__nav");
const body = document.querySelector(".container");
const header = document.querySelector(".overlayer");

[menuOpen, menuClose].forEach((btn) => {
  btn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    mobileMenu.style.transition = "transform .6s ease-in-out";
    body.classList.toggle("overlay");
    body.style.transition = "600ms ease-in-out";
    header.classList.toggle("header-overlayer");
  });
});
