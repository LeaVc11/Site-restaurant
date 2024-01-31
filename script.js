// Navigation

const nav = document.querySelector('.main-nav');
const navToogler = document.querySelector(".nav-toggler");
const tooglerImage = navToogler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");

navToogler.addEventListener("click", toogleNav)

function toogleNav() {
    nav.classList.toggle("active");
    if(tooglerImage.src.includes("hamburger")) {
        tooglerImage.src = "ressources/croix.svg";
        navToogler.ariaExpanded = true;
    }else{
        tooglerImage.src = "ressources/hamburger.svg";
        navToogler.ariaExpanded = false;
    }
}

