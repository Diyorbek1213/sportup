"use strict"

/* АНИМАЦИЯ ПРИ КЛИКЕ ИЛИ ПРИ НАВЕДЕНИИ МЫШИ КОРЗИНКИ И ВХОДА В ШАПКЕ */

if (window.innerWidth > 920) {
	const headerCart = document.querySelector('.header__cart');
	const cartBalance = document.querySelector('.cart__balance');
	const cartNum = document.querySelector('.cart__balance__num');
	if (headerCart && cartNum) {
		headerCart.addEventListener("mouseover", function (e) {
			cartNum.style.color = "#2BB9A9";
			cartNum.style.transition = "all 0.3s ease 0s";
			cartBalance.style.color = "#2BB9A9";
			cartBalance.style.transition = "all 0.3s ease 0s";
			headerCart.addEventListener('mouseleave', function (e) {
				cartNum.style.color = "#212121";
				cartBalance.style.color = "#6C6C6C";
			})
		})
	}
	const loginText = document.querySelector('.login__link');
	const loginLogo = document.querySelector('.login__logo');
	if (loginText && loginLogo) {
		loginText.addEventListener("mouseover", function (e) {
			loginLogo.classList.add('_active');
			loginText.addEventListener("mouseleave", function (e) {
				loginLogo.classList.remove('_active');
			})
		})
	}

}

/* АНИМАЦИЯ КОРЗИНКИ И ВХОДА ДЛЯ УСТРОЙСТ МЕНЬШЕ 920PX */

if (window.innerWidth < 920) {
	const loginLink = document.querySelector('.login__link');
	const logoImg = document.querySelector('.login__img');
	if (loginLink && logoImg) {
		loginLink.onclick = () => {
			logoImg.classList.add('mob_active');
		}
	}
	const headerCart = document.querySelector('.header__cart');
	const cartBalance = document.querySelector('.cart__balance');
	const cartNumber = document.querySelector('.cart__number');
	if (headerCart && cartBalance && cartNumber) {
		headerCart.onclick = () => {
			cartBalance.classList.add('mob_active');
			cartNumber.classList.add('mob_active');
		}
	}
}

