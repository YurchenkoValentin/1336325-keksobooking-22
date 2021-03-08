import {createSimilarAdverts} from './create-similar-ad.js';

const getData = () => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adArr) => {
      adArr.forEach((ad) => {
        createSimilarAdverts(ad);
      });
    });
};


export {getData};

// С Помощью FETCH получаем данные с сервера. Эти данные надо вывести на карту.

