$(function () {
  $('.button-about').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('--opened');
    $(this).prev('div').toggleClass('--opened');
  });
});