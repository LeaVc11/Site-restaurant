// Navigation

const nav = document.querySelector('.main-nav');
const navToogler = document.querySelector(".nav-toggler");
const tooglerImage = navToogler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");

navToogler.addEventListener("click", toogleNav)

function toogleNav() {
    nav.classList.toggle("active");
    if (tooglerImage.src.includes("hamburger")) {
        tooglerImage.src = "ressources/croix.svg";
        navToogler.ariaExpanded = true;
    } else {
        tooglerImage.src = "ressources/hamburger.svg";
        navToogler.ariaExpanded = false;
    }
}

/*
-------------------------------------------
*/
// slideshow
const slideshowImages = document.querySelectorAll(".slideshow-images-container img");
const fadeSlideDots = document.querySelectorAll(".fade-slide-dots .dot");

fadeSlideDots.forEach(dot => dot.addEventListener("click", fadeSlideshow))

let currentFadeIndex = 1;
let fadeIntervalID;

function fadeSlideshow(e) {

    slideshowImages[currentFadeIndex - 1].classList.remove("active");
    fadeSlideDots[currentFadeIndex - 1].classList.remove("active");
    fadeSlideDots[currentFadeIndex - 1].ariaDisabled = "false";

    if (e) {
        currentFadeIndex = e.target.getAttribute("data-fadeIndex");
        clearInterval(fadeIntervalID)
        fadeIntervalID = window.setInterval(fadeSlideshow, 3500)
    } else {
        currentFadeIndex++;
        if (currentFadeIndex > slideshowImages.length) {
            currentFadeIndex = 1;
        }
    }
    slideshowImages[currentFadeIndex - 1].classList.add("active");
    fadeSlideDots[currentFadeIndex - 1].classList.add("active");
    fadeSlideDots[currentFadeIndex - 1].ariaDisabled = "true";
}

fadeIntervalID = window.setInterval(fadeSlideshow, 3500)

//smooth scroll links

const smoothScrollLinks = [
    ...navLinks,
    ...document.querySelectorAll(".hero a")
]

smoothScrollLinks.forEach(link => link.addEventListener("click", handleSmoothScroll));

function handleSmoothScroll(e) {
    e.preventDefault();

    const linkHref = e.target.getAttribute("href").substring(1);

    window.scrollTo({
        top: document.getElementById(linkHref).offsetTop * 0.95,
        behavior: "smooth"
    })
/*    console.log(document.getElementById(linkHref).offsetTop)*/
    window.history.pushState("", "", `${document.location.pathname}#${linkHref}`)
}
