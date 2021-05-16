$(function () {
  $('.header__top-profile').click(function (event) {
    event.preventDefault();
    $('.header__top-profile-menu').toggleClass('active');
  });

  $(document).click(function (event) {
    if ($(event.target).closest('.header__top-profile-menu, .header__top-profile').length) return;
    $('.header__top-profile-menu').removeClass('active')
  });
});
/*
$(function () {
  $(this).find('.clickable').click(function (event) {
    event.preventDefault();
    $(this).parent().toggleClass('.active')
  });
})
*/