$(function () {
  $('.top-header__menumobile').click(function (event) {
    $('.top-header__menumobile, .bottom-header__menu').toggleClass('--active');
    $('.menu2-bottom-header').removeClass('--active');
    $('.menu3-bottom-header').removeClass('--active');
    $('body').toggleClass('--lock');
  });

  $('.wedding').click(function (event) {
    event.preventDefault();
    $('.menu2-bottom-header').addClass('--active');
  });

  $('.menu2-bottom-header__prev').click(function (event) {
    event.preventDefault();
    $('.menu2-bottom-header').removeClass('--active');
  })

  $('.decor').click(function (event) {
    event.preventDefault();
    $('.menu3-bottom-header').addClass('--active');
  });

  $('.menu3-bottom-header__prev').click(function (event) {
    event.preventDefault();
    $('.menu3-bottom-header').removeClass('--active');
  })

  $(document).click(function (event) {
    if ($(event.target).closest('.top-header__menumobile, .bottom-header__menu, .menu2-bottom-header, .menu3-bottom-header').length) return;
    $('.top-header__menumobile, .bottom-header__menu, .menu2-bottom-header, .menu3-bottom-header').removeClass('--active')
  });
});

