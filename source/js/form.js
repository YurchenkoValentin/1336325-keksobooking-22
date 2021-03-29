import {isEscEvent, isClickEvent} from './util.js';
import {DEFAULT_LAT, DEFAULT_LNG, DEFAULT_MAP_ZOOM, map, defaultMarkerLatLng, mainPinMarker, getPins} from './map.js';
import {clearPhoto, setDefaultAvatar} from './photo.js';
import {getData} from './backend.js';

const MIN_LENGHT_TITLE = 30;
const MAX_LENGHT_TITLE = 100;
const MAX_PRICE = 1000000;

const main = document.querySelector('main');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const formAd = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const housingTitle = document.querySelector('#title');
const onHousingPriceInput = document.querySelector('#price');
const onHousingTypeInput = formAd.querySelector('#type');
const formCheckinCheckout = document.querySelector('.ad-form__element--time');
const onCheckinChange = formCheckinCheckout.querySelector('#timein');
const onCheckoutChange = formCheckinCheckout.querySelector('#timeout');
const onRoomNumberChange = document.querySelector('select#room_number');
const onRoomCapacityChange = document.querySelector('select#capacity');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

const onResetButtonClick = formAd.querySelector('.ad-form__reset');

onHousingTypeInput.addEventListener('input', () => {
  const valueLength = housingTitle.value.length;
  if (valueLength < MIN_LENGHT_TITLE) {
    housingTitle.setCustomValidity(`Еще ${MIN_LENGHT_TITLE - valueLength} символов`);
  } else if (valueLength > MAX_LENGHT_TITLE) {
    housingTitle.setCustomValidity(`Удалите ${valueLength - MAX_LENGHT_TITLE} лишних символов`);
  } else {
    housingTitle.setCustomValidity('');
  }
});

const checkPriceValidity = () => {
  const minValue = minPrice[onHousingTypeInput.value];
  onHousingPriceInput.min = minValue;
  onHousingPriceInput.placeholder = minValue;
};

onHousingPriceInput.addEventListener('input', () => {
  checkPriceValidity();
  const priceValue = onHousingPriceInput.value;
  if (priceValue > MAX_PRICE) {
    onHousingPriceInput.setCustomValidity('Цена не может быть больше миллиона');
  } else {
    onHousingPriceInput.setCustomValidity('');
  }
});

onHousingTypeInput.addEventListener('change', () => {
  checkPriceValidity();
});


const checkPlace = () => {
  if (onRoomNumberChange.value === '100' && onRoomCapacityChange.value !== '0') {
    onRoomCapacityChange.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (onRoomNumberChange.value !== '100' && onRoomCapacityChange.value === '0') {
    onRoomCapacityChange.setCustomValidity('Выберите другой вариант');
  } else if (onRoomNumberChange.value < onRoomCapacityChange.value) {
    onRoomCapacityChange.setCustomValidity('Выберите меньшее число гостей');
  } else {
    onRoomCapacityChange.setCustomValidity('');
  }
};

onRoomCapacityChange.addEventListener('change', () => {
  checkPlace();
});

onRoomNumberChange.addEventListener('change', () => {
  checkPlace();
});

onCheckinChange.addEventListener('change', () => {
  onCheckoutChange.value = onCheckinChange.value;
});

onCheckoutChange.addEventListener('change', () => {
  onCheckinChange.value = onCheckoutChange.value;
});

const resetForm = () => {
  formAd.reset();
  mapFilters.reset();
  clearPhoto();
  setDefaultAvatar();
  map.setView({lat: DEFAULT_LAT, lng: DEFAULT_LNG}, DEFAULT_MAP_ZOOM);
  mainPinMarker.setLatLng(defaultMarkerLatLng);
  getData((data) => {
    getPins(data);
  });
};

onResetButtonClick.addEventListener('click', () => {
  resetForm();
});

const onCloseMessageClickKeydown = (evt) => {
  if (isClickEvent(evt) || isEscEvent(evt)) {
    cleanEventListeners();
  }
};

const cleanEventListeners = () => {
  successMessage.remove();
  errorMessage.remove();
  document.removeEventListener('click', onCloseMessageClickKeydown);
  document.removeEventListener('keydown', onCloseMessageClickKeydown);
};

const showMessage = (isSuccess) => {
  isSuccess ? main.append(successMessage) : main.append(errorMessage);
  resetForm();
  document.addEventListener('keydown', onCloseMessageClickKeydown);
  document.addEventListener('click', onCloseMessageClickKeydown);
};

export {showMessage};
