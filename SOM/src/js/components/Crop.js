$(function () {
  const cropImage = [
    'polygon(0 0, 100% 0%, 98% 100%, 0% 100%)',
    'polygon(0 0, 100% 0%, 100% 100%, 0 98%)',
    'polygon(0 0, 100% 0%, 100% 98%, 0 100%)',
    'polygon(0 0, 98% 0, 100% 100%, 0% 100%)',
    'polygon(0 0, 100% 3%, 100% 100%, 0 100%)',
    'polygon(1% 1%, 100% 0, 100% 100%, 0 100%)',
    'polygon(1% 0, 100% 0, 100% 100%, 0 100%)',
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