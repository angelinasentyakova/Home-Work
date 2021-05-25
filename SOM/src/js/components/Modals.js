$(function () {
    $('.js-fancybox').fancybox({
        'touch' : false,
    });
  
    $.extend($.fancybox.defaults, {
        afterClose: function () {
            $('#email').val('');
        },
        modal : true,
    });

    function openModal(form) {
        $.fancybox.defaults.closeExisting = true;
        $.fancybox.open($(form));
        $(form).find('input[type="email"]').val($('.js-input').val());
        $(form).find('input[type="email"]').prop('disabled', true);
    }

    $('body').on('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            let $emails = ['Alexander.Ivanov@gmail.com', 'Pavel.Pavlov@mail.ru', 'DS.Boss@ds.ru'];
            for (let index = 0; index < $emails.length; index++) {
                if ($emails[index] == $('.js-input').val()) {
                    return openModal($('#authorisation')),
                    $('.reset__text a').html($('.js-input').val());
                }
                else {
                    return openModal($('#registration'));
                }
            }
        }
    });
});
