const navToggle = document.querySelector('.nav__toggle');
const closeMenu = document.querySelector('.hamburger__close');
const hamburgerMenu = document.querySelector('.nav__hamburger-menu');
const navbar = document.querySelector('.nav');

const product = document.querySelector('#product');
const navProductItem = document.querySelector('.nav__product-item');

const more = document.querySelector('#more');
const navMoreList = document.querySelector('.nav__more-list')

navToggle.addEventListener('click', () => {
    hamburgerMenu.style.transform = 'translateY(0)'
})

closeMenu.addEventListener('click', () => {
    hamburgerMenu.style.transform = 'translateY(-100%)'
})

window.onscroll = function() {
    "use strict";
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    navbar.classList.add("nav__scroll");
  } else {
    navbar.classList.remove("nav__scroll");
  }
}

product.addEventListener('mouseenter', () => {
    navProductItem.style.opacity = '1'
    navProductItem.style.visibility = 'visible'
})

product.addEventListener('mouseleave', () => {
    navProductItem.style.opacity = '0'
    navProductItem.style.visibility = 'hidden'
})

more.addEventListener('mouseenter', () => {
    navMoreList.style.opacity = '1'
    navMoreList.style.visibility = 'visible'
})

more.addEventListener('mouseleave', () => {
    navMoreList.style.opacity = '0'
    navMoreList.style.visibility = 'hidden'
})