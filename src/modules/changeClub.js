const changeClub = () => {
  const selectClubUlElem = document.querySelector('.clubs-list ul '),
        bodylElem = document.querySelector('body');

  selectClubUlElem.style.display = 'none';
  bodylElem.addEventListener('click', (e) => {
    e.preventDefault();    
    if (e.target.matches('.clubs-list > p') && selectClubUlElem.style.display === 'none') {
      selectClubUlElem.style.display = 'block';
    } else if (e.target.closest('.club-select') === null) {
      selectClubUlElem.style.display = 'none';
    } else {
      selectClubUlElem.style.display = 'none';
    }

  });
};

 export default changeClub;