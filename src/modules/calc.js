
import getMozaikaCosts from './modules/getMozaikaCosts';
import getSchelkovoCosts from './modules/getSchelkovoCosts';

getMozaikaCosts();
getSchelkovoCosts();

const calc = () => {
  const totalpriceElem = document.getElementById('price-total'),
        cardOrderElem = document.getElementById('card_order'),
        cardMozaikaElem = document.getElementById('card_leto_mozaika'),
        cardSchelkovoElem = document.getElementById('card_leto_schelkovo'),
        promoElem = document.querySelector('price-message__promo'),
        radioElem = cardOrderElem.querySelectorAll('input[name="card-type"]');

  
 
  console.log(getMozaikaCosts);
  console.log(getSchelkovoCosts);
  

  

  



};

 export default calc;