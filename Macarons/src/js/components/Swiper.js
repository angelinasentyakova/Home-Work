const slider = new Swiper(".js-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  pagination: {
    el: ".specials__pagination",
    clickable: true,
  },
  breakpoints: {
    560: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const slider2 = new Swiper(".js-swiper-2", {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".youlike__pagination",
    clickable: true,
  },
  breakpoints: {
    560: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 9,
    },
  },
});
