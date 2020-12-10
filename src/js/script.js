const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const menu = document.querySelector('.nav-links');

// toogle menu
const toggleMenu = () => {
  const isShown = menu.style.display === 'block';

  menu.style.display = isShown ? 'none' : 'block';
  hamburgerIcon.style.display = isShown ? 'inline' : 'none';
  closeIcon.style.display = isShown ? 'none' : 'inline';
};

hamburgerIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
  const width = window.screen.availWidth;
  const isLargeScreen = width > 768;

  menu.style.display = isLargeScreen ? 'block' : 'none';
  hamburgerIcon.style.display = isLargeScreen ? 'none' : 'inline';
  closeIcon.style.display = isLargeScreen ? 'inline' : 'none';
});
