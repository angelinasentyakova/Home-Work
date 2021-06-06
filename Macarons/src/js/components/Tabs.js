$(function () {
  $('.js-trigger').on('click', function (e) {
    e.preventDefault();
    $('.js-trigger').removeClass('--active');
    $('.js-tab').removeClass('--active');

    $(this).addClass('--active');
    $($(this).attr('href')).addClass('--active');
  });

  $('.js-trigger:first').click();
});