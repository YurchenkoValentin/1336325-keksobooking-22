//import {createSimilarAdverts} from './create-similar-ad.js';
import {showAlert} from './util.js';
import {getForm} from './map.js';

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


const postFormData = (onSuccess) => {
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
          showAlert('Не удалось отправить форму');
        }
      })
      .catch(() => {
        showAlert('Не удалось отправить форму');
      });
  });
};

const resetForm = () => {
  form.reset();
  showAlert('Форма отправлена');
};

postFormData(resetForm);

export {getData};



