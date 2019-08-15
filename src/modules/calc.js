
// import {
//   mozaikaCosts,
//   getMozaikaCosts
// } from './getMozaikaCosts';

// import {
//   schelkovoCosts,
//   getSchelkovoCosts
// }
// from './getSchelkovoCosts';

// getMozaikaCosts();
// getSchelkovoCosts();

// console.log('mozaikaCosts: ', mozaikaCosts);
// console.log('schelkovoCosts: ', schelkovoCosts);

const calc = () => {
  
  const priceTotalElem = document.getElementById('price-total'),
        radioCardElem = document.querySelectorAll('#card_order .club'),
        radioOderElem = document.querySelector('#card_order .time'),
        promoElem = document.querySelector('.price-message__promo');

  let discountValue;
  let priceClubCart = {
    1: "2999",
    6: "9900",
    9: "13900",
    10: "9900",
    12: "19900"
  };

  const mozaikaCosts = {
    1: "1999",
    6: "9900",
    9: "13900",
    10: "9900",
    12: "19900"
  };
  const schelkovoCosts = {
    1: "5000",
    6: "15990",
    9: "22990",
    10: "15990",
    12: "27990"
  };

  radioCardElem.forEach((item) => {
    item.addEventListener('change', (event) => {
    let target = event.target;
    if (target.value === 'mozaika') {
      priceClubCart = mozaikaCosts;
    } else if (target.value === 'schelkovo') {
      priceClubCart = schelkovoCosts;
    }
    });
  });

  if (radioOderElem !== null) {
  radioOderElem.addEventListener('change', (event) => {
    if (promoElem.value) {
      discountValue = 1000;
    } else {
      discountValue = 0;
    }
    let target = event.target;
    if (target.matches('input[name=card-type]')) {
      let summ = parseInt(priceClubCart[target.value], 10) - parseInt(discountValue, 10);
      priceTotalElem.textContent = `${summ}`;
    }
  });
 }
};

 export default calc;