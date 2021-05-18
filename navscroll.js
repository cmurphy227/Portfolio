const fixNav = () => {
const nav = document.querySelector(".nav");
  if (window.scrollY > nav.offsetHeight + 500){ nav.classList.add("active"); }
  else { nav.classList.remove("active"); }
};

window.addEventListener("scroll", fixNav);




const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



