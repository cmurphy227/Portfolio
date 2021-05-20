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


// Back and Next buttons
function displayChange() {
let displaycount = 0;

  document.getElementById("back").onclick = function backbtn(){
  displaycount--;
  if (displaycount == -1){
    displaycount = 1;
    }
  }
  document.getElementById("next").onclick = function nextbtn(){
  displaycount++;
  if (displaycount == 2){
    displaycount = 0;
    }
  }

  if (displaycount == 0){
    document.getElementById("table2").style.display = "none";
    document.getElementById("table").style.display = "table";
  }
  if (displaycount == 1){
    document.getElementById("table2").style.display = "table";
    document.getElementById("table").style.display = "none";
  }
}