import {showAlert} from './util.js';
import {getForm} from './map.js';
import {showSuccessMessage, showErrorMessage} from './form.js';

const form = getForm();

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
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


const postFormData = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
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
          onSuccess();
        } else {
          onFail();
        }
      })
      .catch(() => {
        onFail();
      });
  });
};

postFormData(showSuccessMessage, showErrorMessage);

export {getData};



