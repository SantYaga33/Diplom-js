const getSchelkovoCosts = () => {
  const schelkovoFormElem = document.querySelector('#schelkovo #card_order'),
        schelkovoHtmlElem = document.querySelector('#schelkovo');
  
  const schelkovoCosts = [];
  if (schelkovoHtmlElem !== null) {
  const schelkovoCostElem = schelkovoFormElem.querySelectorAll('.cost');
  schelkovoCostElem.forEach((elem) => {
    let textElem = elem.textContent.replace(/[^\d]/, '');
    schelkovoCosts.push(textElem);
    console.log(textElem);
  });
  } else {
    return false;
  }
  return schelkovoCosts;
};


export default getSchelkovoCosts;