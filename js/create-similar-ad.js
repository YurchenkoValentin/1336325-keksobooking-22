import {createAd} from './data.js';

//const similarAds = createAd();

const cardTemplate = document.querySelector('#card').content.querySelector('.popup'); //получаем контент темплейта
const photosContainer = cardTemplate.querySelector('.popup__photos');
const popupPhoto = cardTemplate.querySelector('.popup__photo');
//const mapCanvas = document.querySelector('#map-canvas');

const generatePhotos = () => {
  photosContainer.innerHTML = '';
  createAd().offer.photos.forEach((item) => {
    popupPhoto.src = item;
    photosContainer.append(popupPhoto.cloneNode(true));
  });
};

const createSimilarAdverts = (advertisement) => {
  /* similarAds.forEach((advertisement) => {


    advert = adElement;
  }); */

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

  cardTemplate.querySelector('.popup__title').textContent =  advertisement.offer.title;
  cardTemplate.querySelector('.popup__text--address').textContent = advertisement.offer.address;
  cardTemplate.querySelector('.popup__text--price').textContent = String(advertisement.offer.price) + ' ₽/ночь';
  cardTemplate.querySelector('.popup__type').textContent = getAccommodationType(advertisement.offer.type);
  cardTemplate.querySelector('.popup__text--capacity').textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;
  cardTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${String(advertisement.offer.checkin)},
                                                                выезд после  ${String(advertisement.offer.checkout)}`;
  cardTemplate.querySelector('.popup__features').textContent = advertisement.offer.features;
  cardTemplate.querySelector('.popup__description').textContent = advertisement.offer.description;
  generatePhotos();
  cardTemplate.querySelector('.popup__avatar').setAttribute('src', advertisement.author.avatar);

  return adElement;
};

//createSimilarAdverts(similarAds);

export {createSimilarAdverts};





