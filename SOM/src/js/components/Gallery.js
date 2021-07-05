'use strict';

let slides = document.querySelectorAll('.js-image-current');
let thumbs = Array.from(document.querySelectorAll('.js-image-switch'));
let thumbsContainer = document.querySelector('.product-picture__slider');

thumbsContainer.onclick = function (event) {
    let target = event.target;
    let index = thumbs.indexOf(target);
    activeThumb(target);
    activeSlide(index);
};

function activeThumb(clicked) {
    for (let thumb of thumbs) {
        thumb.classList.remove('--active');
    }
    clicked.classList.add('--active');
}

function activeSlide(current) {
    for (let slide of slides) {
        slide.classList.remove('--active');
    }
    slides[current].classList.add('--active');
}


