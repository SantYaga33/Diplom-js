const servicesSlider = () => { 
  const sliderElem = document.querySelector('.services-slider'),
        slideElem = document.querySelectorAll('.services-slider .slide');


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

//слайдер
  //  showSlide - количество отображаемых слайдов
 let showSlide = 5,
   currentSlide = showSlide - 1,
   interval;

 const prevSlide = (elem, index, myClass) => {
   let currentIndex = index - 4;
   if (currentIndex < 0) {
     currentIndex = slideElem.length - Math.abs(index - 4);
    }
  
    console.log(' currentIndex: ',  currentIndex);
   elem[currentIndex].classList.remove(myClass);
 };

const nextSlide = (elem, index, myClass) => {
  elem[index].classList.add(myClass);
  // let showSlids = index+5;
  // for (let i = index; i < showSlids; i++) {
  //   elem[i].classList.add(myClass);
  // console.log(' elem[index]: ',  elem[index]);
  // }
};

const autoPlaySlide = () => {
  prevSlide(slideElem, currentSlide, 'services-slider__active');
  currentSlide++;
  if (currentSlide >= slideElem.length) {
    currentSlide = 0;
  }
  nextSlide(slideElem, currentSlide, 'services-slider__active');
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
  console.log(' target: ', target);
  if (!target.matches('.span-next, .span-prev, .span-next img, .span-prev img')) {
    return;
  }
  prevSlide(slideElem, currentSlide, 'services-slider__active');
  if (target.matches('.span-next, .span-next img')) {
    currentSlide++;
  } else if (target.matches('.span-prev, .span-prev img')) {
    currentSlide--;
  }
  if (currentSlide >= slideElem.length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = slideElem.length - 1;
  }
  nextSlide(slideElem, currentSlide, 'services-slider__active');
});

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

 startSlide(3000);

};

 export default servicesSlider;


