import {createSimilarAdverts} from './create-similar-ad.js';

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advert) => {
    createSimilarAdverts(advert);
  });

