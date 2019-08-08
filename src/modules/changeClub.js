const changeClub = () => {
  const selectClubElem   = document.querySelector('.clubs-list'),
        selectClubUlElem = document.querySelector('.clubs-list ul ');

  selectClubElem.addEventListener('click', () => {
    if (selectClubUlElem.style.display === 'none') {
      selectClubUlElem.style.display = 'block';
    } else {
      selectClubUlElem.style.display = 'none';
    }
  });
};

 export default changeClub;