const gallerySlider = () => {
  const slideElem = document.querySelectorAll('.gallery-slider .slide'),
        sliderElem = document.querySelector('.gallery-slider');


  sliderElem.style.position = 'relative';
  //создаем  стрелки для слайдера 
  const leftArrowElem = document.createElement('div'),
        leftArrowSpanElem = document.createElement('span'),
        leftArrowImgElem = document.createElement('img');

  leftArrowElem.classList.add('slider-arrow', 'prev');
  leftArrowSpanElem.classList.add('span-prev');
  leftArrowImgElem.src = 'images/arrow-left.png';

  leftArrowSpanElem.appendChild(leftArrowImgElem);
  leftArrowElem.appendChild(leftArrowSpanElem);
  sliderElem.appendChild(leftArrowElem);

  const rightArrowElem = document.createElement('div'),
        rightArrowSpanElem = document.createElement('span'),
        rightArrowImgElem = document.createElement('img');

  rightArrowElem.classList.add('slider-arrow', 'next');
  rightArrowSpanElem.classList.add('span-next');
  rightArrowImgElem.src = 'images/arrow-right.png';

  rightArrowSpanElem.appendChild(rightArrowImgElem);
  rightArrowElem.appendChild(rightArrowSpanElem);
  sliderElem.appendChild(rightArrowElem);


  // создаем точки для слайдера 
  const newDivElem = document.createElement('div');
  newDivElem.classList.add('slider-dots');
  const newUlElem = document.createElement('ul');

  for (let i = 0; i < slideElem.length; i++) {
    const newLiElem = document.createElement('li'),
      newButtonElem = document.createElement('button');
  
    newLiElem.appendChild(newButtonElem);
    newUlElem.appendChild(newLiElem);
    newDivElem.appendChild(newUlElem);
  }
  sliderElem.appendChild(newDivElem);

  const dotElem = document.querySelectorAll('.gallery-slider .slider-dots li button');
  dotElem[0].classList.add('slick-active');

  //слайдер
  let currentSlide = 0, interval;

  const prevSlide = async  (elem, index, myClass) => {
    await setTimeout(() => {
      elem[index].classList.remove('gallery-slider__opacity');
    }, 10);
    elem[index].classList.remove(myClass);
  };

  const  nextSlide = async  (elem, index, myClass) => {
    elem[index].classList.add(myClass);
    await setTimeout(() => {
      elem[index].classList.add('gallery-slider__opacity');
    }, 10);
  };

  const autoPlaySlide = () => {
    prevSlide(slideElem, currentSlide, 'gallery-slider__active');
    prevSlide(dotElem, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slideElem.length) {
      currentSlide = 0;
    }
    nextSlide(slideElem, currentSlide, 'gallery-slider__active');
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
   
   console.log(' target: ',  target);
    if (!target.matches('.span-prev img, .span-prev, .span-next, .span-next img, .gallery-slider .slider-dots li button ')) {
      return;
    }
    prevSlide(slideElem, currentSlide, 'gallery-slider__active');
    prevSlide(dotElem, currentSlide, 'slick-active');
    if (target.matches('.span-next, .span-next img')) {
      currentSlide++;
    } else if (target.matches('.span-prev, .span-prev img')) {
      currentSlide--;
    } else if (target.matches('.gallery-slider .slider-dots li button')) {
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
    nextSlide(dotElem, currentSlide, 'slick-active');
    
  });

  //останавливаем слайдер при наведении ( на слайд или точки)
  sliderElem.addEventListener('mouseover', (event) => {
    if (event.target.closest('.gallery-slider .slide') ||
      event.target.matches('.slider-dots li button, .span-prev img, .span-prev, .span-next, .span-next img')) {
      stopSlide();
    }
  });

  sliderElem.addEventListener('mouseout', (event) => {
    if (event.target.closest('.gallery-slider .slide') ||
      event.target.matches('.slider-dots li button, .span-prev img, .span-prev, .span-next, .span-next img')) {
      startSlide();
    }
  });

  startSlide(3000);


};

export default gallerySlider;