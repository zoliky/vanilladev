"use strict";

const header = document.querySelector(".header");
let lastScrollTop = 0;

window.addEventListener("scroll", event => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // if (!nav.classList.contains("is-open")) {
      header.style.top = "-150px";
    // }
  } else {
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
