  let cropImage = [
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

let images = document.querySelectorAll('.products__item-image');
console.log(Math.floor(Math.random() * cropImage.length))
document.addEventListener("DOMContentLoaded", function () {
  if (images.length > 0) {
    for (let index = 0; index < images.length; index++) {
      images[index].style.clipPath = cropImage[Math.floor(Math.random() * cropImage.length)];
    }
  }
});
  