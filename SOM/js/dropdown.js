
$(function () {
  $('.profile-top-header').click(function (event) {
    event.preventDefault();
    $('.profile-top-header__menu').toggleClass('active');
  });

  $(document).click(function (event) {
    if ($(event.target).closest('.profile-top-header__menu, .profile-top-header').length) return;
    $('.profile-top-header__menu').removeClass('active')
  });
});

