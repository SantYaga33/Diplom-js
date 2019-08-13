const sendForm = () => {
  const errorMessage = 'Что то пошло не так ...',
    loadMessage = 'Загрузка ...',
    sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся.';

  const callbackFormElem = document.getElementById('form1'),
    freeVisitFormElem = document.getElementById('form2'),
    bannerFormElem = document.getElementById('banner-form'),
    footerFormElem = document.getElementById('footer_form'),
    cardOrderElem = document.getElementById('card_order');
   
  // валидация полей ввода в формах 
  const allInput = document.querySelectorAll('input');
  allInput.forEach((elem) => {
    if (elem.name === 'phone') {
      elem.addEventListener('input', () => {
        elem.value = elem.value.replace(/[^0-9+]/ig, '');
      });
    }
  });

  allInput.forEach((elem) => {
    if (elem.name === 'name') {
      elem.addEventListener('input', () => {
        elem.value = elem.value.replace(/[^ А-Яа-яЁё]/ig, '');
      });
    }
  });
  // внешний вид ошибки -выводим на страничку
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 20px; color: red;';
  // функция сбора данных с полей ввода  
  const checkCurrentForm = (currentForm) => {
    // const buttonFormElem = currentForm.querySelector('.btn');
    currentForm.addEventListener('submit', (e) => {
      console.log('сработало событие сабмит');
      e.preventDefault();
      currentForm.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      let formData = new FormData(currentForm);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      const allInput = currentForm.querySelectorAll('input');
      allInput.forEach((elem) => {
        elem.value = '';
      });
      
      // обработка полученных данных - после отправки формы
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Status network not 200');
          }
          statusMessage.textContent = sucsessMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 5000);
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.log(error);
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 5000);
        });

    });
  };

  //отправка данных с помощью fetch()
  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };

  checkCurrentForm(callbackFormElem);
  checkCurrentForm(freeVisitFormElem);
  checkCurrentForm(bannerFormElem);
  checkCurrentForm(footerFormElem);
  checkCurrentForm(cardOrderElem);

};

export default sendForm;