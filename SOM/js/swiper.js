const swiper = new Swiper('.block3-content__container', {
  
  navigation: {
    nextEl: '.block3-content__nextslide',
  },
  
  slidesPerView: 4.2,
  spaceBetween: 26,
  speed: 600,
  loop: true,
  breakpoints: {
    
    920: {
      slidesPerView: 1.4,
      spaceBetween: 29,
    },
    1280: {
      slidesPerView: 3.2,
    },
    
  }
});

new Swiper('.block4-content__container', {
  
  navigation: {
    nextEl: '.block4-content__nextslide',
  },
  
  slidesPerView: 3.3,
  spaceBetween: 49,
  speed: 600,
  loop: true,
  breakpoints: {
    
    920: {
      slidesPerView: 1.3,
      spaceBetween: 26,
    },
    1280: {
      slidesPerView: 2.3,
    }
  }

});