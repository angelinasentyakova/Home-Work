$(function () {
  $(".js-accordion-switch").on("click", function () {
    $(this).next(".js-accordion-list").slideToggle();
    $(this).children("img").toggleClass("--active");
  });
});
