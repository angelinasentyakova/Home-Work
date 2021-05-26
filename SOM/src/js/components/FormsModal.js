$(function () {
  const $form = $('.js-sign-in');

  $form.on('submit', function () {
    let emails = ['Alexander.Ivanov@gmail.com', 'Pavel.Pavlov@mail.ru', 'DS.Boss@ds.ru'];
    if (emails.includes($('.js-email').val())) {
      $('#authorisation').insertEmail();
      $('#authorisation').openModal();
      return;
    }
    $('#registration').insertEmail();
    $('#registration').openModal();
  });

  $.fn.insertEmail = function () {
    $(this).find('input[type="email"]').val($('.js-email').val());
    $(this).find('input[type="email"]').prop('disabled', true);
    $('.js-send-password-to').html($('.js-email').val());
  }
});