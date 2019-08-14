const getSchelkovoCosts = () => {
  const schelkovoFormElem = document.querySelector('#schelkovo #card_order'),
        schelkovoCostElem = schelkovoFormElem.querySelectorAll('.cost');

  const schelkovoCosts = [];

  schelkovoCostElem.forEach((elem) => {
    let textElem = elem.textContent.replace(/[^\d]/, '');
    schelkovoCosts.push(textElem);

    console.log(textElem);
  });

  return schelkovoCosts;
};


export default getSchelkovoCosts;