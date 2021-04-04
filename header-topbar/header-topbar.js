"use strict";

const header = document.querySelector(".header");
const sticky = header.offsetTop;

window.addEventListener("scroll", event => {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});