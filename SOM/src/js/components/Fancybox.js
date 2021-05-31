$(function () {
  $('.js-fancybox').fancybox({
    'touch': false,
  });

  $.extend($.fancybox.defaults, {
    modal: true,
  });

  $.fn.openModal = function () {
    event.preventDefault();
    $.fancybox.defaults.closeExisting = true;
    $.fancybox.open($(this));
  }
});
