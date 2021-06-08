$(function () {
  $('.js-accordion-switch').on('click', function () {

    $(this).parent().next('.js-accordion-list').slideToggle();
  })
})