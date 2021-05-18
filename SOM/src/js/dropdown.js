$(function () {
  $('.--clickable > a').click(function (event) {
    event.preventDefault();
    $(this).next('ul').toggleClass('--active');
    $(this).toggleClass('--selected');
  });

  $(document).click(function (event) {
    if ($(event.target).closest('.--clickable > ul, .--clickable').length) return;
    $('.--clickable > ul').removeClass('--active');
    $('.--clickable > a').removeClass('--selected');
  });
});

