const servicesSlider = () => { 
  const sliderElem = document.querySelector('.services-slider'),
        slideElem = document.querySelectorAll('.services-slider .slide'),
        sliderWrapElem = document.querySelector('.services-slider__wrap');


  //создаем  стрелки для слайдера 
  const leftArrowElem = document.createElement('div'),
    leftArrowSpanElem = document.createElement('span');
   
  leftArrowElem.classList.add('slider-arrow', 'prev');
  leftArrowSpanElem.classList.add('span-prev');
  leftArrowElem.appendChild(leftArrowSpanElem);
  sliderElem.appendChild(leftArrowElem);

  const rightArrowElem = document.createElement('div'),
    rightArrowSpanElem = document.createElement('span');
    

  rightArrowElem.classList.add('slider-arrow', 'next');
  rightArrowSpanElem.classList.add('span-next');
  rightArrowElem.appendChild(rightArrowSpanElem);
  sliderElem.appendChild(rightArrowElem);

  //слайдер
  let left = 0, right = 0;
  sliderElem.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
   
    if (!target.matches('.span-prev, span-next')) {
      return;
    }
    if (target.matches('.span-next')) {
      left = left - 210;
      sliderWrapElem.style.left = left + 'px';
    } else if (target.matches('.span-prev')) {
      right = right - 210;
      sliderWrapElem.style.right = right + 'px';
    } 
    // if (currentSlide >= slideElem.length) {
    //   currentSlide = 0;
    // }
    // if (currentSlide < 0) {
    //   currentSlide = slideElem.length - 1;
    // }
   
    
  });

};

 export default servicesSlider;


