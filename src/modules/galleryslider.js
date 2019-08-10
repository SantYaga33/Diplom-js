const gallerySlider = () => {
  const slideElem = document.querySelectorAll('.gallery-slider .slide'),
        sliderElem = document.querySelector('.gallery-slider');


   // создаем точки для слайдера 
  // const newDivElem = document.createElement('div');
  // newDivElem.classList.add('slider-dots');
  // const newUlElem = document.createElement('ul');

  // for (let i = 0; i < slideElem.length; i++) {
  //   const newLiElem = document.createElement('li'),
  //     newButtonElem = document.createElement('button');
  //   newButtonElem.style.zIndex = 1100;

  //   newLiElem.appendChild(newButtonElem);
  //   newUlElem.appendChild(newLiElem);
  //   newDivElem.appendChild(newUlElem);
  // }
  // sliderElem.appendChild(newDivElem);

  // const dotElem = document.querySelectorAll('.slider-dots li button');
  // dotElem[0].classList.add('slick-active');

  //слайдер
  let currentSlide = 0, interval;
  // slideElem[0].classList.add('gallery-slider__active');

  const prevSlide = (elem, index, myClass) => {
    elem[index].classList.remove(myClass);
  };

  const nextSlide = (elem, index, myClass) => {
    elem[index].classList.add(myClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slideElem, currentSlide, 'gallery-slider__active');
    // prevSlide(dotElem, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slideElem.length) {
      currentSlide = 0;
    }
    nextSlide(slideElem, currentSlide, 'gallery-slider__active');
    // nextSlide(dotElem, currentSlide, 'slick-active');
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
    prevSlide(slideElem, currentSlide, 'gallery-slider__active');
    // prevSlide(dotElem, currentSlide, 'slick-active');

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
    nextSlide(slideElem, currentSlide, 'gallery-slider__active');
    // nextSlide(dotElem, currentSlide, 'slick-active');
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

export default gallerySlider;