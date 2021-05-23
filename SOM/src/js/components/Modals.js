$(function () {
  $(".js-fancybox").fancybox();
  
  function openModal(form) {
    $.fancybox.defaults.closeExisting = true;
    $.fancybox.open($(form))
    $(form).find('input[type="email"]').val($('.sign-in__input').val())
    $(form).find('input[type="email"]').prop('disabled', true);
  }

  $('body').on('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      let $emails = ['Alexander.Ivanov@gmail.com', 'Pavel.Pavlov@mail.ru', 'DS.Boss@ds.ru']
      for (let index = 0; index < $emails.length; index++) {
        if ($emails[index] == $('.sign-in__input').val()) {
          return openModal($('#authorisation'))
        }
        else {
          openModal($('#registration'))
        }
      }
    }
  });

  $('.authoristaion__forgot-password').on('click', function () {
    $(".reset__text a").html($('.sign-in__input').val())
  })


});
