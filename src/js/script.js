const hamburgerIcon = document.querySelector('.icon-hamburger');
const closeIcon = document.querySelector('.icon-close');
const menu = document.querySelector('.nav-links');
const innerSlider = document.querySelector('.slider-inner');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderIndicators = document.querySelectorAll('.btn-num');

// toggle menu
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

// homepage slider
let currentIndex = 0;

const moveSliderFrom = (slide, button) => {
  slide.classList.remove('active');
  button.classList.remove('active');
};

const moveSliderTo = (slide, button) => {
  slide.classList.add('active');
  button.classList.add('active');
};

setInterval(() => {
  moveSliderFrom(sliderItems[currentIndex], sliderIndicators[currentIndex]);

  if (currentIndex === 3) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  moveSliderTo(sliderItems[currentIndex], sliderIndicators[currentIndex]);
}, 5000);

sliderIndicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    moveSliderFrom(sliderItems[currentIndex], sliderIndicators[currentIndex]);

    currentIndex = parseInt(indicator.innerHTML) - 1;

    moveSliderTo(sliderItems[currentIndex], sliderIndicators[currentIndex]);
  });
});
