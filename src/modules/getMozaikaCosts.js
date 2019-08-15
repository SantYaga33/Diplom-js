const getMozaikaCosts = () => {
  const mozaikaFormElem = document.querySelector('#mozaika #card_order'),
        mozaikaHtmlElem = document.querySelector('#mozaika');
  
  const mozaikaCosts = [];
  if (mozaikaHtmlElem !== null) {
  const  mozaikaCostElem = mozaikaFormElem.querySelectorAll('.cost');
   mozaikaCostElem.forEach((elem) => {
     let textElem = elem.textContent.replace(/[^\d]/, '');
     mozaikaCosts.push(textElem);
     console.log(textElem);
    });
  } else {
    return false;
  }
  return mozaikaCosts;

};
export default getMozaikaCosts;