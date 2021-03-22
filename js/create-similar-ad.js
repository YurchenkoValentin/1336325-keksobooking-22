import {createAd} from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const photosContainer = cardTemplate.querySelector('.popup__photos');
const popupPhoto = cardTemplate.querySelector('.popup__photo');

const generatePhotos = () => {
  photosContainer.innerHTML = '';
  createAd().offer.photos.forEach((item) => {
    popupPhoto.src = item;
    photosContainer.append(popupPhoto.cloneNode(true));
  });
};

let adElement = '';

const generateFeatures = (features) => {
  if (features.includes('wifi') != true) {
    adElement.querySelector('.popup__feature--wifi').remove();
  } if (features.includes('dishwasher') != true) {
    adElement.querySelector('.popup__feature--dishwasher').remove();
  } if (features.includes('parking') != true) {
    adElement.querySelector('.popup__feature--parking').remove();
  } if (features.includes('washer') != true) {
    adElement.querySelector('.popup__feature--washer').remove();
  } if (features.includes('elevator') != true) {
    adElement.querySelector('.popup__feature--elevator').remove();
  } if (features.includes('conditioner') != true) {
    adElement.querySelector('.popup__feature--conditioner').remove();
  }
};

const createSimilarAdverts = (ad) => {

  adElement = cardTemplate.cloneNode(true);

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

  adElement.querySelector('.popup__title').textContent =  ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent = String(ad.offer.price) + ' ₽/ночь';
  adElement.querySelector('.popup__type').textContent = getAccommodationType(ad.offer.type);
  adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${String(ad.offer.checkin)}, выезд после  ${String(ad.offer.checkout)}`;
  generateFeatures(ad.offer.features);
  adElement.querySelector('.popup__description').textContent = ad.offer.description;
  generatePhotos();
  adElement.querySelector('.popup__avatar').setAttribute('src', ad.author.avatar);

  return adElement;
};

//createSimilarAdverts(similarAds);

export {createSimilarAdverts};





