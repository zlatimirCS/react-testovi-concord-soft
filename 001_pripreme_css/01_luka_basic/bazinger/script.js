const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


/*carousel */

let counter = 2;
const headerTag = document.getElementById("header");




const btnNext = document.getElementById('carousel-button-next');
const btnPrev = document.getElementById('carousel-button-prev');

btnNext.addEventListener('click', function () {

    counter++;
    if (counter > 2) {
        counter = 0;
        headerTag.style.backgroundImage = "url('img/head-pic0.jpg')";


    }
    else if (counter === 1) {
        headerTag.style.backgroundImage = "url('img/head-pic1.jpg')";

    }
    else if (counter === 2) {
        headerTag.style.backgroundImage = "url('img/head-pic2.jpg')";

    }
    else {
        headerTag.style.backgroundImage = "url('img/head-pic0.jpg')";

    }
});
btnPrev.addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        counter = 2;
        headerTag.style.backgroundImage = "url('img/head-pic2.jpg')";
    }
    else if (counter === 1) {
        headerTag.style.backgroundImage = "url('img/head-pic1.jpg')";
    }
    else if (counter === 2) {
        headerTag.style.backgroundImage = "url('img/head-pic2.jpg')";
    }
    else {
        headerTag.style.backgroundImage = "url('img/head-pic0.jpg')";
    }
});





const slides = document.getElementsByClassName('testimonials-txt');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next1').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev1').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}