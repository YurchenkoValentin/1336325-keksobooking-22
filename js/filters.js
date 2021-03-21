import {getPins, clearMap} from './map.js';
//В форме с фильтрами реализовать филтрацию по параметрам
//т.е. показывать объявления с какими-то параметрами
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const filterHousingType = document.querySelector('#housing-type');
const filterHousingPrice = document.querySelector('#housing-price');
const filterHousingRooms = document.querySelector('#housing-rooms');
const filterHousingGuests = document.querySelector('#housing-guests');
//map_filters
//На форме с фильтрами вешается обработчик события. При изменении фильт

const filterData = ((serverData, map) => {
  filterHousingType.addEventListener('change', () => {

    clearMap();

    const typeFilter = (() => {
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
      console.log(arrFilteredByType);
      getPins(arrFilteredByType, map);
    });
    typeFilter();
  });

  filterHousingPrice.addEventListener('change', () => {

    clearMap();

    const priceFilter = (() => {
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
      console.log(arrFilteredByPrice);
      getPins(arrFilteredByPrice, map);
    });
    priceFilter();
  });

  filterHousingRooms.addEventListener('change', () => {

    clearMap();

    const roomsFilter = (() => {
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
      getPins(arrFilteredByRoomsNumber, map);
    });
    roomsFilter();
  });


  filterHousingGuests.addEventListener('change', () => {

    clearMap();

    const guestsFilter = (() => {
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
      getPins(arrFilteredByGuestsNumber, map);
    });
    guestsFilter();
  });
});

export {filterData};





