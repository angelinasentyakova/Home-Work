

$(function () {
  $('.--clickable').click(function (event) {
    event.preventDefault();
    $(this).children('ul').toggleClass('--active');
  });

  $(document).click(function (event) {
    if ($(event.target).closest('.--clickable > ul, .--clickable').length) return;
    $('.--clickable > ul').removeClass('--active')
  });
});


/*
let menuArrows = document.querySelectorAll('.--clickable');
if (menuArrows.length > 0) {
  for (let index = 0; index < menuArrows.length; index++) {
    const menuArrow = menuArrows[index];
    menuArrow.addEventListener("click", function (e) {
      event.preventDefault();
      menuArrow.children[1].classList.toggle('--active');
    });
  }
}

$(function () {
  $('.header__top-profile').click(function (event) {
    event.preventDefault();
    $(this).children('ul').toggleClass('--active');
  });

  $(document).click(function (event) {
    if ($(event.target).closest('.header__top-profile-list, .header__top-profile').length) return;
    $('.header__top-profile-list').removeClass('--active')
  });
});

/*
$(function () {
  $('.--clickable').click(function (event) {
    event.preventDefault();
    $(this).children('ul').addClass('--active');
    console.log($('.--active').closest('li'));
    });
  });

$(function () {
  $('.--active').closest().find('li').click(function (event) {
      event.preventDefault();
      $(this).removeClass('--active');
    });
  });

*/
