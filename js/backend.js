import {showAlert} from './util.js';
import {getForm} from './map.js';
import {showMessage} from './form.js';

const DATA_URL = 'https://22.javascript.pages.academy/keksobooking/data';

const onFormSubmit = getForm();

const getData = (onSuccess) => {
  fetch(DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Ошибка! Адрес не найден');
      }
    })
    .then((data) => onSuccess(data))
    .catch(() => showAlert('Ошибка! Адрес не найден'));
};


const postFormData = (onSuccess) => {
  onFormSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess(true);
        } else {
          onSuccess(false);
        }
      })
      .catch(() => {
        onSuccess(false);
      });
  });
};

postFormData(showMessage);

export {getData};



