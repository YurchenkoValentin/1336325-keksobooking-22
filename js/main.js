/*jslint node: true */
'use strict';

const getRandomNumber = (min, max) => {
  if (max <= min) {
    alert('ошибка! Минимальное число должно быть меньше максимального');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getCoordinates = (min, max, numberOfSymbols) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let random = min + Math.random() * (max - min);

  return random.toFixed(numberOfSymbols);
};

// Задание №2

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

const CHECKOUT = ['12:00', '13:00', '14,00'];
const getAccommodationCheckoutIndex = () => {
  return getRandomNumber(0, CHECKOUT.length - 1);
};

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
FEATURES.length = getRandomNumber(1, FEATURES.length);

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
PHOTOS.length = getRandomNumber(1, PHOTOS.length);

const getLocationX = () => {
  return 35 + '.' + getRandomNumber(65000, 70000);
};

const getLocationY = () => {
  return 139 + '.' + getRandomNumber(70000, 80000);
};

const SIMILAR_ADS_COUNT = 10;

const createAd = () => {
  return {
    author: {
      avatar: 'img/avatars/user' + 0 + getAvatarNumber() + '.png',
    },

    offer: {
      title: 'Лучшее предложение. Жилье на берегу океана!',
      address: function () {
        return this.location.x;
      },
      price: getRandomPrice(),
      type: ACCOMMODATION_TYPES[getAccommodationTypeIndex()],
      rooms: getRandomRoomsNumber(),
      guests: getRandomGuestsNumber(),
      checkin: CHECKIN[getAccommodationCheckinIndex()],
      checkout: CHECKOUT[getAccommodationCheckoutIndex()],
      features: FEATURES,
      description: 'Лучшие виды на пляжи Калифорнии',
      photos: PHOTOS,
    },

    location: {
      x: getLocationX(),
      y: getLocationY(),
    },
  };
};

const similarAds = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAd());

console.log(similarAds);
