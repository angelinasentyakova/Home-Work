
(function($) {

  $.fn.mySlider = function(interval) {
    let container = $('.mySlider__container');
    let slides = $('.mySlider__wrapper > div');
    let dots = container.find('.mySlider__dots li');
    let amount = slides.length;
    let index = amount - 1;
    let timer;
    let auto = true;
    dots.each((item, currentDot) => $(currentDot).on('click', () => {
      auto = false;
      changeSlides(item - index);
    }))

    function changeSlides(item = 1) {
      window.clearTimeout(timer);
      $(slides[index]).fadeOut(1000);
      $(dots[index]).removeClass('active');
      index = (amount + index + item) % amount;
      $(slides[index]).delay(100).fadeIn(1000);
      $(dots[index]).addClass('active');
      if (auto) timer = setTimeout(changeSlides, interval);
    }
    container.mouseleave(function() {
      if (!auto) {
        auto = true;
        changeSlides();
      }
    })
    changeSlides()
  };
})(jQuery);

