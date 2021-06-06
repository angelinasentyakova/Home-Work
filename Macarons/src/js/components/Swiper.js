let slider = new Swiper('.js-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  speed: 1000,

  pagination: {
    el: '.specials__pagination',
    clickable: true,
  },
});

let mySwiper = new Swiper('.js-swiper-2', {
    slidesPerView: 4,
    spaceBetween: 9,
    slidesPerGroup: 4,
    speed: 1000,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });