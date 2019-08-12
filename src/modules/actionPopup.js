const actionPopup = () => {
  
  const visitedElem = document.querySelectorAll('*[data-popup^="#"]'),
        allPopup = document.querySelectorAll('.popup');

  // allPopup.forEach((elem) => {
  //   elem.classList.add('popup-scale0');
  // });

  visitedElem.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target;
      let targetAttr = target.getAttribute('data-popup');
      let currentPopupElem = document.querySelector(targetAttr);

      currentPopupElem.style.display = 'block';
      currentPopupElem.classList.add('popup-scale1');
      currentPopupElem.addEventListener('click', (event) => {
        if (event.target.matches('.close_icon') || (event.target.closest('.form-content') === null) ) {
          currentPopupElem.classList.remove('popup-scale1');
          currentPopupElem.style.display = 'none';
        }
      });
    });  
      
  });
  
};

 export default actionPopup;