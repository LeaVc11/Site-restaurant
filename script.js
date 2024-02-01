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
/*
-------------------------------------------
*/
// slideshow
const slideshowImg = document.querySelectorAll(".slideshow-images-container img");
const fadeSlideDots = document.querySelectorAll(".fade-slide-dots.dot");

fadeSlideDots.forEach(dot =>dot.addEventListener("click", fadeSlideShow))
let currentFadeIndex = 1;
let fadeIntervalID;
function fadeSlideShow(event) {
    slideshowImg[currentFadeIndex -1].classList.remove("active");
    fadeSlideDots[currentFadeIndex -1].classList.remove("active");
    fadeSlideDots[currentFadeIndex -1].ariaDisabled = "false";
    if(e){
        currentFadeIndex = e.target.getAttribute(("data-fadeIndex"));
    }else{

    }
}