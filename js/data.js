import {getRandomNumber, getCoordinates, getRandomArrayCountShuffled} from './util.js';

const getAvatarNumber = () => {
  return getRandomNumber(1, 8);
};

const getRandomPrice = () => {
  return getRandomNumber(1, 100000);
};

const ACCOMMODATION_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const getAccommodationTypeIndex = () => {
  return getRandomNumber(0, ACCOMMODATION_TYPES.length - 1);
};

const getRandomRoomsNumber = () => {
  return getRandomNumber(1, 5);
};

const getRandomGuestsNumber = () => {
  return getRandomNumber(1, 50);
};

const CHECKIN = ['12:00', '13:00', '14:00'];
const getAccommodationCheckinIndex = () => {
  return getRandomNumber(0, CHECKIN.length - 1);
};

const CHECKOUT = ['12:00', '13:00', '14:00'];
const getAccommodationCheckoutIndex = () => {
  return getRandomNumber(0, CHECKOUT.length - 1);
};

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const getCoordinatesX = () => {
  return getCoordinates(35.65000, 35.70000, 5);
};

const getCoordinatesY = () => {
  return getCoordinates(139.70000, 139.80000, 5);
};

const SIMILAR_ADS_COUNT = 10;

const createAd = () => {
  let adExample =  {
    author: {
      avatar: 'img/avatars/user' + 0 + getAvatarNumber() + '.png',
    },

    offer: {
      title: 'Лучшее предложение. Жилье на берегу океана!',
      address: '',
      price: getRandomPrice(),
      type: ACCOMMODATION_TYPES[getAccommodationTypeIndex()],
      rooms: getRandomRoomsNumber(),
      guests: getRandomGuestsNumber(),
      checkin: CHECKIN[getAccommodationCheckinIndex()],
      checkout: CHECKOUT[getAccommodationCheckoutIndex()],
      features: getRandomArrayCountShuffled(FEATURES),
      description: 'Лучшие виды на пляжи Калифорнии',
      photos: getRandomArrayCountShuffled(PHOTOS),
    },

    location: {
      x: getCoordinatesX(),
      y: getCoordinatesY(),
    },
  };

  adExample.offer.address = `${adExample.location.x}, ${adExample.location.y}`;
  return adExample;
};

createAd();

const createAdverts = () => new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAd());

export {createAdverts, createAd};

