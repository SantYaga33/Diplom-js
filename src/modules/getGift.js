const getGift = () => {
  const fixedGiftElem = document.querySelector('.fixed-gift > img'),
        giftElem = document.getElementById('gift');

  fixedGiftElem.addEventListener('click', () => {
    fixedGiftElem.style.display = 'none';
    giftElem.style.display = 'block';
  });
   giftElem.addEventListener('click', (event) => {
     if (event.target.matches('.close_icon') || 
     (event.target.closest('.form-content') === null) || 
     event.target.matches('.form-content > button')) {
      giftElem.style.display = 'none';
     }
   });
};

 export default getGift;
