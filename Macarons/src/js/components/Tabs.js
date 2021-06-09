$(function () {
  $(".js-trigger").on("click", function (e) {
    e.preventDefault();
    $(".js-trigger").removeClass("--active");
    $(".js-tab").removeClass("--active");
    $(this).addClass("--active");
    $($(this).attr("href")).addClass("--active");
  });

  const $tabletScreen = 990;
  // если экран < 990, делает активным второй таб, так как первый скрыт
  if ($(window).width() < $tabletScreen) {
    $(".js-triggers").children(".js-trigger")[1].click();
  } else {
    $(".js-trigger:first").click();
  }
  // делает активным второй таб при уменьшении окна, и первый - при увеличении
  $(window).on("resize", function () {
    if ($(window).width() < $tabletScreen) {
      $(".js-triggers").children(".js-trigger")[1].click();
    } else {
      $(".js-trigger:first").click();
    }
  });
});
