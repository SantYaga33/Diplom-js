const sendForm = () => {
  // const errorMessage = 'Что то пошло не так ...',
  //   loadMessage = 'Загрузка ...',
  //   sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся.';

  const callbackFormElem = document.getElementById('form1'),
    freeVisitFormElem = document.getElementById('form2'),
    bannerFormElem = document.getElementById('banner-form'),
    footerFormElem = document.getElementById('footer_form'),
    cardOrderElem = document.getElementById('card_order'),
    thanksFormElem = document.getElementById('thanks'),
    thanksContentH4Elem = document.querySelector('#thanks  .form-content h4'),
    thanksContentTextElem = document.querySelector('#thanks  .form-content p');

  // валидация полей ввода в формах 
  const allInput = document.querySelectorAll('input');
  allInput.forEach((elem) => {
    if (elem.name === 'phone') {
      elem.addEventListener('input', () => {
      const regex = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2}$)/g;
      // const regex = /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/g;
      const subst = "+$1 ($2) $3-$4-$5";
      elem.value = elem.value.replace(regex, subst);
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
 
  //блок управление закрытия popup для благодарности и ошибок
  const thanksElem = document.getElementById('thanks');
  thanksElem.addEventListener('click', (event) => {
    if (event.target.matches('.close_icon') ||
      (event.target.closest('.form-content') === null) ||
      event.target.matches('.form-content > button')) {
      thanksElem.style.display = 'none';
    }
  });
 
  // функция сбора данных с полей ввода  
  const checkCurrentForm = (currentForm) => {
    currentForm.addEventListener('submit', (e) => {
      const currentFormCheckbox = currentForm.querySelector('input[type=checkbox]'),
            currentPopupElem = currentForm.closest('.popup');
      e.preventDefault();
      let formData = new FormData(currentForm);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      
      if (currentFormCheckbox !== null) {
      if (!currentFormCheckbox.checked) {
        thanksContentH4Elem.textContent = 'Ошибка';
        thanksContentTextElem.textContent = `Необходимо Ваше согласие на обработку персональных данных`;
        thanksFormElem.style.display = 'block';
        setTimeout(() => {
          thanksFormElem.style.display = 'none';
          if (currentPopupElem) {
            currentPopupElem.style.display = 'block';
          }
          thanksContentH4Elem.textContent = 'Спасибо!';
          thanksContentTextElem.textContent = `Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.`;
        }, 3000);
      }
      } else {
        console.log('У этой формы нет чекбокса');
      }

      const allInput = currentForm.querySelectorAll('input');
      allInput.forEach((elem) => {
        elem.value = '';
        if (elem.type == "checkbox") {
          elem.checked = false;
        }
      });
      
      // обработка полученных данных - после отправки формы
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Status network not 200');
          }
          if (currentPopupElem) {
          currentPopupElem.style.display = 'none';
          }
          thanksFormElem.style.display = 'block';
          setTimeout(() => {
            thanksFormElem.style.display = 'none';
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          thanksContentH4Elem.textContent = 'Ошибка';
          thanksContentTextElem.textContent = `Приносим извенения. Попробуйте позже`;
          thanksFormElem.style.display = 'block';
          setTimeout(() => {
            thanksFormElem.style.display = 'none';
            thanksContentH4Elem.textContent = 'Спасибо!';
            thanksContentTextElem.textContent = `Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.`;
          }, 3000);
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