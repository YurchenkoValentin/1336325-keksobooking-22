import {createAdverts} from './data.js';

const similarAds = createAdverts();

const cardTemplate = document.querySelector('#card').content.querySelector('.popup'); //получаем контент темплейта
//const cardPhotos = document.querySelector('.popup__photo');
const mapCanvas = document.querySelector('#map-canvas');

const createSimilarAdverts = () => {
  similarAds.forEach((advertisement) => {
    const adElement = cardTemplate.cloneNode(true);

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

    adElement.querySelector('.popup__title').textContent = advertisement.offer.title;
    adElement.querySelector('.popup__text--address').textContent = advertisement.offer.address;
    adElement.querySelector('.popup__text--price').textContent = String(advertisement.offer.price) + ' ₽/ночь';
    adElement.querySelector('.popup__type').textContent = getAccommodationType(advertisement.offer.type);
    adElement.querySelector('.popup__text--capacity').itextContent = `Заезд после ${String(advertisement.offer.checkin)},
                                                                  выезд после  ${String(advertisement.offer.checkout)}`;
    adElement.querySelector('.popup__features').textContent = advertisement.offer.features;
    adElement.querySelector('.popup__description').textContent = advertisement.offer.description;
    adElement.querySelector('.popup__photo').setAttribute('src', 1);
    adElement.querySelector('.popup__avatar').setAttribute('src', advertisement.author.avatar);

    mapCanvas.appendChild(adElement);
  });
};

export {createSimilarAdverts};





