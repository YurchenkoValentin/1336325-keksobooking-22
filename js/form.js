import {isEscEvent, isClickEvent} from './util.js';
import {DEFAULT_LAT, DEFAULT_LNG, DEFAULT_MAP_ZOOM, map, defaultMarkerLatLng, mainPinMarker} from './map.js';

const MIN_LENGHT_TITLE = 30;
const MAX_LENGHT_TITLE = 100;
const MAX_PRICE = 1000000;

const main = document.querySelector('main');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const formAd = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const housingTitle = document.querySelector('#title');
const housingPrice = document.querySelector('#price');
const housingType = document.querySelector('#type');
const formCheckinCheckout = document.querySelector('.ad-form__element--time');
const checkin = formCheckinCheckout.querySelector('#timein');
const checkout = formCheckinCheckout.querySelector('#timeout');
const roomNumber = document.querySelector('select#room_number');
const roomCapacity = document.querySelector('select#capacity');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

const resetButton = formAd.querySelector('.ad-form__reset');

housingTitle.addEventListener('input', () => {
  const valueLength = housingTitle.value.length;
  if (valueLength < MIN_LENGHT_TITLE) {
    housingTitle.setCustomValidity(`Еще ${MIN_LENGHT_TITLE - valueLength} символов`)
  } else if (valueLength > MAX_LENGHT_TITLE) {
    housingTitle.setCustomValidity(`Удалите ${valueLength - MAX_LENGHT_TITLE} лишних символов`);
  } else {
    housingTitle.setCustomValidity('');
  }
});


housingType.addEventListener('change', () => {
  const minValue = minPrice[housingType.value];
  housingPrice.min = minValue;
  housingPrice.placeholder = minValue;
  switch (housingType.value) {
    case 'bungalow':
      document.querySelector('.ad-form__element #price').placeholder = '0';
      document.querySelector('.ad-form__element #price').setAttribute('min', '0');
      break;
    case 'flat':
      document.querySelector('.ad-form__element #price').placeholder = '1000';
      document.querySelector('.ad-form__element #price').setAttribute('min', '1000');
      break;
    case 'house':
      document.querySelector('.ad-form__element #price').placeholder = '5000';
      document.querySelector('.ad-form__element #price').setAttribute('min', '5000');
      break;
    case 'palace':
      document.querySelector('.ad-form__element #price').placeholder = '10000';
      document.querySelector('.ad-form__element #price').setAttribute('min', '10000');
      break;
  }
});

housingPrice.addEventListener('input', () => {
  const priceValue = housingPrice.value;
  if (priceValue > MAX_PRICE) {
    housingPrice.setCustomValidity('Цена не может быть больше миллиона');
  } else {
    housingPrice.setCustomValidity('');
  }
});

checkin.addEventListener('change', () => {
  switch (checkin.value) {
    case '12:00':
      checkout.value = '12:00';
      break;
    case '13:00':
      checkout.value = '13:00';
      break;
    case '14:00':
      checkout.value = '14:00';
      break;
  }
});

checkout.addEventListener('change', () => {
  switch (checkout.value) {
    case '12:00':
      checkin.value = '12:00';
      break;
    case '13:00':
      checkin.value = '13:00';
      break;
    case '14:00':
      checkin.value = '14:00';
      break;
  }
});


roomNumber.addEventListener('change', () => {
  switch (roomNumber.value) {
    case '1':
      roomCapacity.value = '1';
      break;
    case '2':
      roomCapacity.value = '1';
      roomCapacity.value = '2';
      break;
    case '3':
      roomCapacity.value = '1';
      roomCapacity.value = '2';
      roomCapacity.value = '3';
      break;
    case '100':
      roomCapacity.value = '0';
      break;
  }
});

roomCapacity.addEventListener('change', () => {
  switch (roomCapacity.value) {
    case '0':
      roomNumber.value = '100';
      break;
    case '1':
      roomNumber.value = '1';
      roomNumber.value = '2';
      break;
    case '2':
      roomNumber.value = '1';
      roomNumber.value = '2';
      break;
    case '3':
      roomNumber.value = '1';
      roomNumber.value = '2';
      roomNumber.value = '3';
      break;
  }
});

const resetForm = () => {
  formAd.reset();
  mapFilters.reset();
  map.setView({lat: DEFAULT_LAT, lng: DEFAULT_LNG}, DEFAULT_MAP_ZOOM);
  mainPinMarker.setLatLng(defaultMarkerLatLng);
};

resetButton.addEventListener('click', () => {
  resetForm();
});


const closeMessageEsc = (evt) => {
  if (isEscEvent(evt)) {
    successMessage.remove();
    errorMessage.remove();
    document.removeEventListener('keydown', closeMessageEsc);
  }
};

const closeMessageClick = (evt) => {
  if (isClickEvent(evt)) {
    successMessage.remove();
    errorMessage.remove();
    document.removeEventListener('click', closeMessageClick);
  }
};

const showSuccessMessage = () => {
  main.append(successMessage);
  resetForm();
  document.addEventListener('keydown', closeMessageEsc);
  document.addEventListener('click', closeMessageClick);
};

const showErrorMessage = () => {
  main.append(errorMessage);
  document.addEventListener('keydown', closeMessageEsc);
  document.addEventListener('click', closeMessageClick);
}

export {showSuccessMessage, showErrorMessage};
