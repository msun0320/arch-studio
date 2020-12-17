const hamburgerIcon = document.querySelector('.icon-hamburger');
const closeIcon = document.querySelector('.icon-close');
const menu = document.querySelector('.nav-links');

const toggleMenu = () => {
  const isShown = menu.style.display === 'block';

  menu.style.display = isShown ? 'none' : 'block';
  hamburgerIcon.style.display = isShown ? 'inline' : 'none';
  closeIcon.style.display = isShown ? 'none' : 'inline';
};

hamburgerIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const isLargeScreen = width > 768;

  menu.style.display = isLargeScreen ? 'block' : 'none';
  hamburgerIcon.style.display = isLargeScreen ? 'none' : 'inline';
  closeIcon.style.display = isLargeScreen ? 'inline' : 'none';
});
