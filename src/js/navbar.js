const hamburgerIcon = document.querySelector('.icon-hamburger');
const closeIcon = document.querySelector('.icon-close');
"use strict";

const menu = document.querySelector('.nav-links');

const toggleMenu = () => {
  const isOpen = menu.style.display === 'block';

  menu.style.display = isOpen ? 'none' : 'block';
  hamburgerIcon.style.display = isOpen ? 'inline' : 'none';
  closeIcon.style.display = isOpen ? 'none' : 'inline';
  document.body.style.position = isOpen ? 'static' : 'fixed';
};

hamburgerIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const isLargeScreen = width > 768;

  menu.style.display = isLargeScreen ? 'block' : 'none';
  hamburgerIcon.style.display = isLargeScreen ? 'none' : 'inline';
  closeIcon.style.display = isLargeScreen ? 'inline' : 'none';
  document.body.style.position = 'static';
});
