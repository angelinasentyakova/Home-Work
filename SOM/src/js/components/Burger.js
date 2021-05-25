'use strict'

const iconMenu = document.querySelector('.header__top-burger ');
const menuBody = document.querySelector('.header__bottom-menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('--lock');
		iconMenu.classList.toggle('--active');
		menuBody.classList.toggle('--active');
	});
}
