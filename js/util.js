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

export {getRandomNumber, getCoordinates};


