"use strict";

const panelHeader = document.querySelectorAll(".panel-header");

panelHeader.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    item.parentElement.classList.toggle("open");
  });
});