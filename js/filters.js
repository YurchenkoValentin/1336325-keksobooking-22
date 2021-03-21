//Необходимо реализовать изменения фильтров таким образом, чтобы они не отменяли предыдущие


//1. Вынести все фильтры в одну функцию
//1.1. Обработку события вешать на элемент формы фильтров
//2. Сравнить все массивы. Возвращать значения, которые повтаряются в каждом. Возможно, поможет метод (every);

import {getPins, clearMap} from './map.js';

const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const filterHousingType = document.querySelector('#housing-type');
const filterHousingPrice = document.querySelector('#housing-price');
const filterHousingRooms = document.querySelector('#housing-rooms');
const filterHousingGuests = document.querySelector('#housing-guests');

const filtersWrapper = document.querySelector('.map__filters');


const filterData = ((serverData) => {
  filtersWrapper.addEventListener('change', () => {
    clearMap();
    const arrFilteredByType = serverData.filter((ad) => {
      switch (filterHousingType.value) {
        case 'palace':
          return ad.offer.type === 'palace';
        case 'flat':
          return ad.offer.type === 'flat';
        case 'house':
          return ad.offer.type === 'house';
        case 'bungalow':
          return ad.offer.type === 'bungalow';
        case 'any':
          return ad;
      }
    });

    const arrFilteredByPrice = serverData.filter((ad) => {
      const priceKey = ad.offer.price;

      if (filterHousingPrice.value === 'low') {
        if (priceKey < MIN_PRICE) {
          return ad;
        }
      } else if (filterHousingPrice.value === 'middle') {
        if (priceKey >= MIN_PRICE && priceKey < MAX_PRICE) {
          return ad;
        }
      } else if (filterHousingPrice.value === 'high') {
        if (priceKey >= MAX_PRICE) {
          return ad;
        }
      } else if (filterHousingPrice.value === 'any') {
        return ad;
      }
    });

    const arrFilteredByRoomsNumber = serverData.filter((ad) => {
      switch (filterHousingRooms.value) {
        case '1':
          return ad.offer.rooms === 1;
        case '2':
          return ad.offer.rooms === 2;
        case '3':
          return ad.offer.rooms === 3;
        case 'any':
          return ad;
      }
    });

    const arrFilteredByGuestsNumber = serverData.filter((ad) => {
      switch (filterHousingGuests.value) {
        case '0':
          return ad.offer.guests === 0;
        case '1':
          return ad.offer.guests === 1;
        case '2':
          return ad.offer.guests === 2;
        case 'any':
          return ad;
      }

    });

    const firstCompare = arrFilteredByType.filter((type) => {
      return arrFilteredByPrice.some((price) => {
        return type === price;
      });
    });

    const secondCompare = firstCompare.filter((result) => {
      return arrFilteredByRoomsNumber.some((roomsNumber) => {
        return result === roomsNumber;
      });
    });

    const finalcompare = secondCompare.filter((secondResult) => {
      return arrFilteredByGuestsNumber.some((guestsNumber) => {
        return secondResult === guestsNumber;
      });
    });

    console.log(finalcompare);
    getPins(finalcompare);
  });
});


const filterDataWrapper = ((serverData) => {
  filterData(serverData);
});

export {filterDataWrapper};





