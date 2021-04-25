'use strict'

const iconMenu = document.querySelector('.top-header__icon');
const menuBody = document.querySelector('.top-header__left');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}



