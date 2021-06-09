$(function () {
  $(".js-button").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("--hidden");
    $(this).siblings("a").toggleClass("--hidden");
    $(this).parent("div").prev("div").toggleClass("--opened");
  });
});
