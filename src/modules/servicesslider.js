const servicesSlider = () => { 
  // return function (selector) {
    const
      _mainElement = document.querySelector('.services-slider'), // основный элемент блока
      _sliderWrapper = _mainElement.querySelector('.services-slider__wrapper'), // обертка для .slider-item
      _sliderItems = _mainElement.querySelectorAll('.slide'), // элементы (.slider-item)
      _sliderControls = _mainElement.querySelectorAll('.services-slider .slider-arrow'), // элементы управления
      // _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
      // _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width); // ширина одного элемента   
      
  //создаем  стрелки для слайдера 
  const leftArrowElem = document.createElement('div'),
    leftArrowSpanElem = document.createElement('span'),
    _sliderControlLeft = document.createElement('img');

  leftArrowElem.classList.add('slider-arrow', 'prev');
  leftArrowSpanElem.classList.add('span-prev');
  _sliderControlLeft.src = 'images/arrow-left.png';

  leftArrowSpanElem.appendChild(_sliderControlLeft);
  leftArrowElem.appendChild(leftArrowSpanElem);
  _mainElement.appendChild(leftArrowElem);

  const rightArrowElem = document.createElement('div'),
    rightArrowSpanElem = document.createElement('span'),
    _sliderControlRight = document.createElement('img');

  rightArrowElem.classList.add('slider-arrow', 'next');
  rightArrowSpanElem.classList.add('span-next');
  _sliderControlRight.src = 'images/arrow-right.png';

  rightArrowSpanElem.appendChild(_sliderControlRight);
  rightArrowElem.appendChild(rightArrowSpanElem);
  _mainElement.appendChild(rightArrowElem);

//слайдер

     
 //останавливаем слайдер при наведении ( на слайд или точки)
//  sliderElem.addEventListener('mouseover', (event) => {
//    if (event.target.closest('.gallery-slider .slide') ||
//      event.target.matches('.slider-dots li button')) {
//      stopSlide();
//    }
//  });

//  sliderElem.addEventListener('mouseout', (event) => {
//    if (event.target.closest('.gallery-slider .slide') ||
//      event.target.matches('.slider-dots li button')) {
//      startSlide();
//    }
//  });

 



 export default servicesSlider;


