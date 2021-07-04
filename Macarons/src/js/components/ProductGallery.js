$(function () {
  $(".js-thumb").on("click", function () {
    let mainImage = $(this).index();
    $(".js-thumb").removeClass("--active");
    $(this).addClass("--active");
    $(".js-main").removeClass("--active");
    $(".js-main").eq(mainImage).addClass("--active");
  });
});
