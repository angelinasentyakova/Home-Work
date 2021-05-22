'use strict'

let slides = document.querySelectorAll('.js-image-current');
let buttons = document.querySelectorAll('.js-image-switch');

//ставим класс active на текущий слайд, с других убираем
function activeSlide(n) {
  for (let slide of slides) {
    slide.classList.remove('--active');
  }
  slides[n].classList.add('--active');
}

//ставим класс active на текущую кнопку, с других убираем
function activeButton(n) {
  for (let button of buttons) {
    button.classList.remove('--active');
  }
  buttons[n].classList.add('--active');
}

//обьединение кнопки и слайда с одинаковым идексом
function makeCurrentSlide(index) {
  activeSlide(index);
  activeButton(index);
}

//переключаем слайд по кнопке
buttons.forEach((item, currentButton) => {
  item.addEventListener('click', () => {
    currentSlide = currentButton;
    makeCurrentSlide(currentSlide);
  })
})


