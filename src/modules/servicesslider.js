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

      let
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение транфсофрмации .slider_wrapper
      _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
      _items = []; // массив элементов

    // наполнение массива _items
    _sliderItems.forEach(function (item, index) {
      _items.push({
        item: item,
        position: index,
        transform: 0
      });
    });

    const position = {
      getItemMin: function () {
        let indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        let indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return _items[position.getItemMin()].position;
      },
      getMax: function () {
        return _items[position.getItemMax()].position;
      }
    }

    const _transformItem = function (direction) {
      let nextItem;
      if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
      }
      if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

    // обработчик события click для кнопок "назад" и "вперед"
    const _controlClick = function (e) {
      const direction = this.classList.contains('span-next') ? 'right' : 'left';
      e.preventDefault();
      _transformItem(direction);
    };

    const _setUpListeners = function () {
      // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
      _sliderControls.forEach(function (item) {
        item.addEventListener('click', _controlClick);
      });
    }

    // инициализация
    _setUpListeners();

    return {
      right: function () { // метод right
        _transformItem('right');
      },
      left: function () { // метод left
        _transformItem('left');
      }
    }

 
};



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


