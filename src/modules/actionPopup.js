const actionPopup = () => {
  const giftFormElem = document.querySelector('.fixed-gift'),
        bodyElem     = document.querySelector('body');

  giftFormElem.setAttribute('data-popup', '#fixed-gift');

  const visitedElem = document.querySelectorAll('*[data-popup^="#"]');

  visitedElem.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target;
      let targetAttr = target.getAttribute('data-popup');
      let currentPopupElem = document.querySelector(targetAttr);

      currentPopupElem.style.display = 'block';

      bodyElem.addEventListener('click', (event) => {
        if ( event.target.matches('.close_icon') || event.target.closest('.popup') === null ) {
          currentPopupElem.style.display = 'none';
        } else {
          return;
        }
      });

    });  
  });
  
};

 export default actionPopup;