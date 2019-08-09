const mainSlider = () => {
  const slideElem = document.querySelectorAll('.main-slider .slide'),
        headSlideElem = document.querySelectorAll('.head-slider'),
        sliderElem = document.querySelector('.main-slider');




//исправляем верстку (поехала из за слайдера)
headSlideElem.style.marginTop = '-80 + px';


//'const slider = () => {
//   const slideElem = document.querySelectorAll('.portfolio-item'),
//     buttonElem = document.querySelectorAll('.portfolio-btn'),
//     sliderElem = document.querySelector('.portfolio-content'),
//     ulElem = document.querySelector('.portfolio-dots');

//   // создаем точки для слайдера ( они закомм-ны в верстке)
//   for (let i = 0; i < slideElem.length; i++) {
  //     let newLiElem = document.createElement('li');
  //     newLiElem.classList.add('dot');
  //     ulElem.appendChild(newLiElem);
  //   }
  //   const dotElem = document.querySelectorAll('.dot');
  //   dotElem[0].classList.add('dot-active');
  
  let currentSlide = 0, interval;

  slideElem.forEach((item) => {
    item.style.transitionProperty = 'all';
    item.style.transitionDuration = 0.3 + 's';
    item.style.transitionTimingFunction = 'ease';
    item.style.opacity = 0;
  });
   
    slideElem[0].style.opacity = 1;
    slideElem[0].style.display = 'block';
  
  const prevSlide = (elem, index) => {
    elem[index].style.display = 'none';
    elem[index].style.transitionProperty = 'all';
    elem[index].style.transitionDuration = 0.5 + 's';
    elem[index].style.transitionTimingFunction = 'ease';
    elem[index].style.opacity = 0;
  };

  const nextSlide = (elem, index) => {
    elem[index].style.display = 'block';
    elem[index].style.transitionProperty = 'all';
    elem[index].style.transitionDuration = 0.5 + 's';
    elem[index].style.transitionTimingFunction = 'ease';
    elem[index].style.opacity = 1;
  };

  const autoPlaySlide = () => {
    prevSlide(slideElem, currentSlide);
    // prevSlide(dotElem, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slideElem.length) {
      currentSlide = 0;
    }
    nextSlide(slideElem, currentSlide);
    // nextSlide(dotElem, currentSlide, 'dot-active');
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
    if (!target.matches('.portfolio-btn, .dot')) {
      return;
    }
    prevSlide(slideElem, currentSlide);
    // prevSlide(dotElem, currentSlide, 'dot-active');

   
    // if (target.matches('.dot')) {
    //   dotElem.forEach((elem, index) => {
    //     if (elem === target) {
    //       currentSlide = index;
    //     }
    //   });
    // }
    if (currentSlide >= slideElem.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slideElem.length - 1;
    }
    nextSlide(slideElem, currentSlide);
    // nextSlide(dotElem, currentSlide, 'dot-active');
  });

  sliderElem.addEventListener('mouseover', (event) => {
    if (event.target.matches('.main-slider .slide') ||
      event.target.matches('.dot')) {
      stopSlide();
    }
  });

  sliderElem.addEventListener('mouseout', (event) => {
    if (event.target.matches('.main-slider .slide') ||
      event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide(3000);


};

export default mainSlider;