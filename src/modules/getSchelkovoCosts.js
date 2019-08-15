const schelkovoCosts = {};
const getSchelkovoCosts = () => {
  const schelkovoFormElem = document.querySelector('#schelkovo #card_order'),
        schelkovoHtmlElem = document.querySelector('#schelkovo');
  
  const schelkovoTime = [], schelkovoPrice = [];
  if (schelkovoHtmlElem !== null) {
  const schelkovoCostElem = schelkovoFormElem.querySelectorAll('.cost'),
        schelkovoTimeElem = schelkovoFormElem.querySelectorAll('input[name=card-type]');
  schelkovoCostElem.forEach((elem) => {
    let textElem = elem.textContent.replace(/[^\d]/, '');
    schelkovoPrice.push(textElem);
  });

  schelkovoTimeElem.forEach((item) => {
    schelkovoTime.push( item.value);
  });
  
  for (let i = 0; i < schelkovoTime.length; i++) {
    schelkovoCosts[schelkovoTime[i]] = schelkovoPrice[i];
  }
  
} else {
  return false;
}
console.log(schelkovoCosts);
  
};

// getSchelkovoCosts();

// export default schelkovoCosts;

export {
  schelkovoCosts,
  getSchelkovoCosts
};

