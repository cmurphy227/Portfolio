// Navscroll
const fixNav = () => {
const nav = document.querySelector(".nav");
  if (window.scrollY > nav.offsetHeight + 500){ nav.classList.add("active"); }
  else { nav.classList.remove("active"); }
};

window.addEventListener("scroll", fixNav);



// Hamburger menu
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


// Page buttons
function page1() {

  document.getElementById("table3").style.display = "none";
  document.getElementById("table4").style.display = "none";
  document.getElementById("table1").style.display = "table";
  document.getElementById("table2").style.display = "table";
  location.href = "#projects";
  document.getElementById("page1").style.backgroundColor = "#fff";
  document.getElementById("page1").style.color = "#c0392b";
  document.getElementById("page1").style.borderColor = "#c0392b";
  document.getElementById("page2").style.backgroundColor = "#000";
  document.getElementById("page2").style.color = "#fff";
  document.getElementById("page2").style.borderColor = "#000";
}

function page2() {

  document.getElementById("table3").style.display = "table";
  document.getElementById("table4").style.display = "table";
  document.getElementById("table1").style.display = "none";
  document.getElementById("table2").style.display = "none";
  location.href = "#projects";
  document.getElementById("page1").style.backgroundColor = "#000";
  document.getElementById("page1").style.color = "#fff";
  document.getElementById("page1").style.borderColor = "#000";
  document.getElementById("page2").style.backgroundColor = "#fff";
  document.getElementById("page2").style.color = "#c0392b";
  document.getElementById("page2").style.borderColor = "#c0392b";
}