//import {createSimilarAdverts} from './create-similar-ad.js';
import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Ошибка! Адрес не найден');
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Ошибка! Адрес не найден');
    });
};

export {getData};

// С Помощью FETCH получаем данные с сервера. Эти данные надо вывести на карту.

