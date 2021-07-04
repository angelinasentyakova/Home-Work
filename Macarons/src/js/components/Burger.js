$(function () {
  $(".js-burger-icon").on("click", function () {
    $("body").toggleClass("--lock");
    $($(this)).toggleClass("--active");
    $(".js-burger-menu").toggleClass("--active");
  });
});
