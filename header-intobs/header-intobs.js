"use strict";

const header = document.querySelector(".header");
const sectionIntro = document.querySelector(".intro");

const sectionIntroOptions = {
  rootMargin: "-250px 0px 0px 0px"
};

const sectionIntroObserver = new IntersectionObserver(function(entries, sectionIntroObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, sectionIntroOptions);

sectionIntroObserver.observe(sectionIntro);