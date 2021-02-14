// Нужно ли передавать значения по 0 по индексу элементу или использовать метод forEach для перебора всех элементов массива //const offerTitle = similarAdArr.forEach((ad) => console.log(ad.offer.title));

// Если воздействовать на DOM то разметка в браузере не меняется?

import {similarAds} from './data.js';

const similarAdArr = similarAds()[0]; //первый объект массива похожих объявлений

const cardTemplate = document.querySelector('#card').content; //получаем контент темплейта

//получаем элемент внутри темлпейта и его текстовое содержимое
let popupTitle = cardTemplate.querySelector('.popup__title').innerText;
let popupAddres = cardTemplate.querySelector('.popup__text--address').innerText;
let popupPrice = cardTemplate.querySelector('.popup__text--price').innerText;
let popupType = cardTemplate.querySelector('.popup__type').innerText;
let popupCapacity = cardTemplate.querySelector('.popup__text--capacity').innerText;
let popupFeatures = cardTemplate.querySelector('.popup__features').innerText;
let popupDescription = cardTemplate.querySelector('.popup__description').innerText;
let popupPhoto = cardTemplate.querySelector('.popup__photo'); // Искал через .children элемента .popup__photos, но не удалось потом воздействовать на его атрибут. Пришлось работать непосредственно с изображением в диве
let popupAvatar = cardTemplate.querySelector('.popup__avatar');

// Сопоставление типов жилья


const getAccommodationType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
};

popupTitle = similarAdArr.offer.title;
popupAddres = similarAdArr.offer.address;
popupPrice = String(similarAdArr.offer.price) + ' ₽/ночь';
popupType = getAccommodationType(similarAdArr.offer.type);
popupCapacity = 'Заезд после ' + String(similarAdArr.offer.checkin) +
                ', выезд после ' + String(similarAdArr.offer.checkout);
popupFeatures = similarAdArr.offer.features;
popupDescription = similarAdArr.offer.description;
popupPhoto.setAttribute('src', similarAdArr.offer.photos[0]); // не понял, как здесь должен выглядеть готовый вариант.Нужно ли здесь добавлять еще элементы в зависимости от количества генерируемых фото в объекте?
popupAvatar.setAttribute('src', similarAdArr.author.avatar);

// "Если данных для заполнения не хватает, соответствующий блок в карточке скрывается." — Не понял.
// "Отрисуйте один, например первый, из сгенерированных DOM-элементов в блок .map-canvas, чтобы проверить, что данные в разметку были вставлены корректно" — Не понял.






export {popupTitle};
