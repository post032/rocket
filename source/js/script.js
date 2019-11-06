"use strict";
  var open = document.querySelector('.menu__open');
  var menu = document.querySelector('.menu');
  var logo = document.querySelector('.menu__logo');
  var show = document.querySelector('.menu__nav');
  var toggle = document.querySelector('.menu__range');
  var body = document.querySelector('body')

  open.addEventListener('click', function (e) {
    e.preventDefault();
    if(show.classList.contains('menu__nav--close')) {
      show.classList.remove('menu__nav--close');
      open.classList.remove('menu__open');
      open.classList.add('menu__close');
      logo.classList.add('menu__logo--active');
      menu.classList.add('menu--active');
    }
    else {
      show.classList.add('menu__nav--close');
      open.classList.add('menu__open');
      open.classList.remove('menu__close');
      logo.classList.remove('menu__logo--active');
      menu.classList.remove('menu--active');
    }
  });
