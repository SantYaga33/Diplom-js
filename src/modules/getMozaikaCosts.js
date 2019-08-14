const getMozaikaCosts = () => {
  const mozaikaFormElem = document.querySelector('#mozaika #card_order'),
        mozaikaCostElem = mozaikaFormElem.querySelectorAll('.cost');

   const mozaikaCosts = [];
   mozaikaCostElem.forEach((elem) => {
     let textElem = elem.textContent.replace(/[^\d]/, '');
     mozaikaCosts.push(textElem);
     console.log(textElem);
   });
   return mozaikaCosts;
  };


export default getMozaikaCosts;