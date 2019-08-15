
const mozaikaCosts = {};
const getMozaikaCosts = () => {
  const mozaikaFormElem = document.querySelector('#mozaika #card_order'),
        mozaikaHtmlElem = document.querySelector('#mozaika');

  const mozaikaTime = [], mozaikaPrice = [];
  if (mozaikaHtmlElem !== null) {
   const mozaikaCostElem = mozaikaFormElem.querySelectorAll('.cost'),
         mozaikaTimeElem = mozaikaFormElem.querySelectorAll('input[name=card-type]');
    mozaikaCostElem.forEach((elem) => {
      let textElem = elem.textContent.replace(/[^\d]/, '');
      mozaikaPrice.push(textElem);
    });

    mozaikaTimeElem.forEach((item) => {
      mozaikaTime.push(item.value);
    });

    for (let i = 0; i < mozaikaTime.length; i++) {
      mozaikaCosts[mozaikaTime[i]] = mozaikaPrice[i];
    }
    
  } else {
    return false;
  }
  console.log(mozaikaCosts);
};

// getMozaikaCosts();

// export default mozaikaCosts;
export { mozaikaCosts, getMozaikaCosts} ;
