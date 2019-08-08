const actionPopup = () => {
  const giftFormElem = document.querySelector('.fixed-gift');
        giftFormElem.setAttribute('data-popup', '#fixed-gift');

  const visitedElem = document.querySelectorAll('*[data-popup^="#"]');

  visitedElem.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target;
      let targetAttr = target.getAttribute('data-popup');
      let currentPopupElem = document.querySelector(targetAttr);

      currentPopupElem.style.display = 'block';
      let currentCloseElem = currentPopupElem.querySelector('.close_icon');
      
      currentCloseElem.addEventListener('click', () => {
        currentPopupElem.style.display = 'none';
      });
    
    });  
  });
  
};

 export default actionPopup;