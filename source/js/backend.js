import {showAlert} from './util.js';
import {getForm} from './map.js';
import {showMessage} from './form.js';

const GET_DATA_URL = 'https://22.javascript.pages.academy/keksobooking/data';
const POST_DATA_URL = 'https://22.javascript.pages.academy/keksobooking';

const onFormSubmit = getForm();

const getData = (onSuccess) => {
  fetch(GET_DATA_URL)
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
      POST_DATA_URL,
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



