
const servicesSlider = (minWidth = 223) => {
  const slide = document.querySelectorAll('.services-slider .slide'),
    slider = document.querySelector('.services-slider'),
    sliderWrapper = document.querySelector('#services .wrapper'),
    maxWidth = minWidth * (slide.length - 5);

  let currentWidth = 0,
    h2 = document.querySelector('#services .wrapper h2'),
    allArrrElem = `
            <div class="slider-arrow next"><span><img src="images/arrow-right.png"></span></div>
            <div class="slider-arrow prev"><span><img src="images/arrow-left.png"></span></div>
            `;

  //корректируем верстку
  slide[0].style.marginLeft = 0;
  sliderWrapper.style.cssText = `max-width: 1150px`;
  document.getElementById('services').insertAdjacentHTML('afterbegin', h2.outerHTML);
  h2.remove();
  slider.insertAdjacentHTML('beforeEnd', allArrrElem);

  const moveSlide = (changeSlide) => {
    currentWidth += +changeSlide;
    if (currentWidth <= 6) {
      currentWidth = 4;
      slide[0].style.marginLeft = `-${currentWidth}px`;
      currentWidth = 0;
    } else if (currentWidth >= maxWidth) {
      currentWidth = maxWidth;
      slide[0].style.marginLeft = `-${currentWidth}px`;
    }
    slide[0].style.marginLeft = `-${currentWidth}px`;

  };

  slider.addEventListener('click', (event) => {
    let target = event.target;
    event.preventDefault();
    if (target.closest('.next')) {
      moveSlide(minWidth);
    }
    if (target.closest('.prev')) {
      moveSlide(-minWidth);
    }
  });
};

export default servicesSlider;


