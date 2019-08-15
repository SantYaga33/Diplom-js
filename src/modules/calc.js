
import mozaikaCosts from './getMozaikaCosts';
import schelkovoCosts from './getSchelkovoCosts';

const calc = () => {
  
  const priceTotalElem = document.getElementById('price-total'),
        radioCardElem = document.querySelectorAll('#card_order .club'),
        radioOderElem = document.querySelector('#card_order .time');

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

  radioOderElem.addEventListener('change', (event) => {
    let target = event.target;
    if (target.matches('input[name=card-type]')) {
      priceTotalElem.textContent = `${priceClubCart[target.value]}`;
    }
  });

};

 export default calc;