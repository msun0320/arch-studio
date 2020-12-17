const innerSlider = document.querySelector('.slider-inner');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderIndicators = document.querySelectorAll('.btn-num');

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
