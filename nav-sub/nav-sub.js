"use strict";

// Hamburger navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = menuToggle.parentElement;

menuToggle.addEventListener("click", event => {
  event.preventDefault();
  nav.classList.toggle("open");
});

const dropdownToggle = document.querySelectorAll(".dropdown-toggle");
dropdownToggle.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    item.classList.toggle("open");
    item.nextElementSibling.classList.toggle("open");
  });
});