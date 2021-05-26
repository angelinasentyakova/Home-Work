$(function () {
  $('.js-fancybox').fancybox({
    'touch': false,
  });

  $.extend($.fancybox.defaults, {
    afterClose: function () {
      $('.js-email').val('');
    },
    modal: true,
  });

  $.fn.openModal = function () {
    event.preventDefault();
    $.fancybox.defaults.closeExisting = true;
    $.fancybox.open($(this));
  }
});
