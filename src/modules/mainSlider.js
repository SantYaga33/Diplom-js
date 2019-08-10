const mainSlider = () => {
  const slideElem = document.querySelectorAll('.main-slider .slide'),
        headSlideElem = document.querySelector('.head-slider'),
        sliderElem = document.querySelector('.main-slider');

  //исправляем верстку (поехала из за слайдера)
  headSlideElem.style.marginTop = -80 + 'px';

  // создаем точки для слайдера ( они закомм-ны в верстке)
  const newDivElem = document.createElement('div');
  newDivElem.classList.add('slider-dots');
  const newUlElem = document.createElement('ul');

  for (let i = 0; i < slideElem.length; i++) {
    const newLiElem = document.createElement('li'),
    newButtonElem = document.createElement('button');
    newButtonElem.style.zIndex = 1100;

    newLiElem.appendChild(newButtonElem);
    newUlElem.appendChild(newLiElem);
    newDivElem.appendChild(newUlElem);
    }
  sliderElem.appendChild(newDivElem);

  const dotElem = document.querySelectorAll('.slider-dots li button');
  dotElem[0].classList.add('slick-active');
  
  //слайдер
  let currentSlide = 0, interval;
  slideElem.forEach((item) => {
    item.classList.add('main-slider__opacity');
  });
   
  slideElem[0].classList.add('main-slider__active');
 
  const prevSlide = (elem, index, myClass) => {
    elem[index].classList.remove(myClass);
  };

  const nextSlide = (elem, index, myClass) => {
    elem[index].classList.add(myClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slideElem, currentSlide, 'main-slider__active');
    prevSlide(dotElem, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slideElem.length) {
      currentSlide = 0;
    }
    nextSlide(slideElem, currentSlide, 'main-slider__active');
    nextSlide(dotElem, currentSlide, 'slick-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderElem.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
  
    if (!target.matches('.slider-dots li button')) {
      return;
    }
    prevSlide(slideElem, currentSlide, 'main-slider__active');
    prevSlide(dotElem, currentSlide, 'slick-active');

    if (target.matches('.slider-dots li button')) {
      dotElem.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slideElem.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slideElem.length - 1;
    }
    nextSlide(slideElem, currentSlide, 'main-slider__active');
    nextSlide(dotElem, currentSlide, 'slick-active');
  });

  //останавливаем слайдер при наведении ( на слай или точки)
  sliderElem.addEventListener('mouseover', (event) => {
    if (event.target.closest('.main-slider .slide') ||
      event.target.matches('.slider-dots li button')) {
      stopSlide();
    }
  });

  sliderElem.addEventListener('mouseout', (event) => {
    if (event.target.closest('.main-slider .slide') ||
      event.target.matches('.slider-dots li button')) {
      startSlide();
    }
  });

  startSlide(3000);


};

export default mainSlider;