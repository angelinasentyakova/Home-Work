'use strict'

let slides = document.querySelectorAll('.js-image-current');
let thumbs = document.querySelectorAll('.js-image-switch');

//ставим класс active на текущий слайд, с других убираем
function activeSlide(current) {
  for (let slide of slides) {
    slide.classList.remove('--active');
  }
  slides[current].classList.add('--active');
}

//ставим класс active на текущую кнопку, с других убираем
function activeButton(current) {
  for (let thumb of thumbs) {
    thumb.classList.remove('--active');
  }
  thumbs[current].classList.add('--active');
}

//обьединение кнопки и слайда с одинаковым идексом
function makeCurrentSlide(index) {
  activeSlide(index);
  activeButton(index);
}

//переключаем слайд по кнопке
thumbs.forEach((item, currentThumb) => {
  item.addEventListener('click', () => {
    currentSlide = currentThumb;
    makeCurrentSlide(currentSlide);
  })
})


