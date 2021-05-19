$(function () {
  const cropImage = [
    'polygon(0 0, 100% 0%, 97% 100%, 0% 100%)',
    'polygon(0 0, 100% 0%, 100% 100%, 0 97%)',
    'polygon(0 0, 100% 0%, 100% 97%, 0 100%)',
    'polygon(0 0, 98% 0, 100% 100%, 0% 100%)',
    'polygon(0 0, 100% 3%, 100% 100%, 0 100%)',
    'polygon(1% 6%, 100% 0, 100% 100%, 0 100%)',
    'polygon(5% 0, 100% 0, 100% 100%, 0 100%)',
    'polygon(0 0, 100% 0, 100% 100%, 4% 100%)',
    'polygon(0 0, 98% 0, 100% 100%, 0% 100%)',
  ];

  const images = $('.js-crop-image');

  if (images.length > 0) {
    for (let index = 0; index < images.length; index++) {
      images[index].style.clipPath = cropImage[Math.floor(Math.random() * cropImage.length)];
    }
  };
});