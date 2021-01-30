/*jslint node: true */

const getRandomNumber = function (min, max) {
  if (max <= min) {
    alert('ошибка! Минимальное число должно быть меньше максимального');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber(20, 50);

let getCoordinates = function (min, max, numberOfSymbols) {

  min = Math.ceil(min);
  max = Math.floor(max);
  let random = Math.random() * (max - min + 1) + min;

  return random.toFixed(numberOfSymbols);
};

getCoordinates(1, 100, 3);





