import {createAdverts} from './data.js';

const similarAds = createAdverts();

const cardTemplate = document.querySelector('#card').content.querySelector('.popup'); //получаем контент темплейта
const mapCanvas = document.querySelector('#map-canvas');

const createSimilarAdverts = () => {
  similarAds.forEach((advertisement) => {

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

    cardTemplate.querySelector('.popup__title').textContent = advertisement.offer.title;
    cardTemplate.querySelector('.popup__text--address').textContent = advertisement.offer.address;
    cardTemplate.querySelector('.popup__text--price').textContent = String(advertisement.offer.price) + ' ₽/ночь';
    cardTemplate.querySelector('.popup__type').textContent = getAccommodationType(advertisement.offer.type);
    cardTemplate.querySelector('.popup__text--capacity').itextContent = `Заезд после ${String(advertisement.offer.checkin)},
                                                                  выезд после  ${String(advertisement.offer.checkout)}`;
    cardTemplate.querySelector('.popup__features').textContent = advertisement.offer.features;
    cardTemplate.querySelector('.popup__description').textContent = advertisement.offer.description;

    cardTemplate.querySelector('.popup__avatar').setAttribute('src', advertisement.author.avatar);
  });

  const adElement = cardTemplate.cloneNode(true);
  mapCanvas.append(adElement);
};

export {createSimilarAdverts};





