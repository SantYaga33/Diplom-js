const actionPopup = () => {
  
  const visitedElem = document.querySelectorAll('*[data-popup^="#"]');
   
  visitedElem.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target;
      let targetAttr = target.getAttribute('data-popup');
      let currentPopupElem = document.querySelector(targetAttr);

      currentPopupElem.style.display = 'block';
      currentPopupElem.addEventListener('click', (event) => {
        if (event.target.matches('.close_icon') || (event.target.closest('.form-content') === null) ) {
          currentPopupElem.style.display = 'none';
        }
      });
    });  
      
  });
  
};

 export default actionPopup;