'use strict'

let slides = document.querySelectorAll('.slider__item');
let buttons = document.querySelectorAll('.slider__button');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

//ставим класс active на текущий слайд, с других убираем
function activeSlide(n) {
  for (let slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

//ставим класс active на текущую кнопку, с других убираем
function activeButton(n) {
  for (let button of buttons) {
    button.classList.remove('active');
  }
  buttons[n].classList.add('active');
}

//обьединение кнопки и слайда с одинаковым идексом
function makeCurrentSlide(index) {
  activeSlide(index);
  activeButton(index);
}

//бесконечная прокуртка слайдов
function nextSlide() {
  if(currentSlide == slides.length - 1) {
    currentSlide = 0;
    makeCurrentSlide(currentSlide);
  } else {
    currentSlide++;
    makeCurrentSlide(currentSlide);
  }
}

//переключаем слайд по кнопке
buttons.forEach((item, currentButton) => {
  item.addEventListener('click', () => {
    currentSlide = currentButton;
    makeCurrentSlide(currentSlide);
  })
})

//отмена автопрокрутки по клику на любую из пяти кнопок
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    clearInterval(slideInterval);
  })
})
