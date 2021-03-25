const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isClickEvent = (evt) => {
  return evt.type === 'click';
};

const getRandomNumber = (min, max) => {
  if (max <= min) {
    alert('Ошибка! Минимальное число должно быть меньше максимального');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCoordinates = (min, max, numberOfSymbols) => {
  return (Math.random() * (max - min) + min).toFixed(numberOfSymbols);
};

const getRandomArrayCountShuffled = (array) => {
  getArrayShuffle(array);
  return array.slice(getRandomNumber(0, array.length - 1));
};

const getArrayShuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const debounce = (filterAds, timeout) => {
  let timeFilter;
  return () => {
    clearTimeout(timeFilter);
    timeFilter = setTimeout(() => filterAds.apply(this), timeout);
  };
};



export {getRandomNumber, getCoordinates, getRandomArrayCountShuffled, showAlert, isEscEvent, isClickEvent, debounce};


