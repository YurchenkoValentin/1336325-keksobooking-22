import {createAd} from './data.js';

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

const createSimilarAdverts = (ad) => {
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

  cardTemplate.querySelector('.popup__title').textContent =  ad.offer.title;
  cardTemplate.querySelector('.popup__text--address').textContent = ad.offer.address;
  cardTemplate.querySelector('.popup__text--price').textContent = String(ad.offer.price) + ' ₽/ночь';
  cardTemplate.querySelector('.popup__type').textContent = getAccommodationType(ad.offer.type);
  cardTemplate.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  cardTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${String(ad.offer.checkin)},
                                                                выезд после  ${String(ad.offer.checkout)}`;
  cardTemplate.querySelector('.popup__features').textContent = ad.offer.features;
  cardTemplate.querySelector('.popup__description').textContent = ad.offer.description;
  generatePhotos();
  cardTemplate.querySelector('.popup__avatar').setAttribute('src', ad.author.avatar);

  return adElement;
};

//createSimilarAdverts(similarAds);

export {createSimilarAdverts};





