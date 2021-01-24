// const date = document.querySelector("#date");

// // set year
// date.innerHTML = new Date().getFullYear();

const navBtn = document.querySelector("#nav-btn");
const sidebar = document.querySelector("#sidebar");
const closeBtn = document.querySelector("#close-btn");

const navbar = document.querySelector("#nav");

//! show/hide sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
})

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
})

//! fixed navbar

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 40) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
})