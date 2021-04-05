"use strict";

// Hamburger navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = menuToggle.parentElement;

menuToggle.addEventListener("click", event => {
  event.preventDefault();
  nav.classList.toggle("open");
});