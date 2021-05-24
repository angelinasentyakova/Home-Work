$(function () {
    $('.js-button-more').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('--opened');
        $(this).parent('div').prev('div').toggleClass('--opened');
        $(this).children('a').toggleClass('--noshow');
    });
});