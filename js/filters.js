import {getPins, clearMap} from './map.js';

const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const filtersWrapper = document.querySelector('.map__filters');

const filterHousingType = document.querySelector('#housing-type');
const filterHousingPrice = document.querySelector('#housing-price');
const filterHousingRooms = document.querySelector('#housing-rooms');
const filterHousingGuests = document.querySelector('#housing-guests');

//Начало работы с фильтрами-чекбоксами

const featureWifi = document.querySelector('#filter-wifi');
const featureDishwasher = document.querySelector('#filter-dishwasher');
const featureParking = document.querySelector('#filter-parking');
const featureWasher = document.querySelector('#filter-washer');
const featureElevator = document.querySelector('#filter-elevator');
const featureconditioner = document.querySelector('#filter-conditioner');

const housingFeatures = document.querySelector('#housing-features');



/* const checkFilterFeatures = () => {
  const checkedFeaturesArray = [];

  if (featureWifi.checked) {
    checkedFeaturesArray.push(featureWifi.value);
  } if (featureDishwasher.checked) {
    checkedFeaturesArray.push(featureDishwasher.value);
  } if (featureParking.checked) {
    checkedFeaturesArray.push(featureParking.value);
  } if (featureWasher.checked) {
    checkedFeaturesArray.push(featureWasher.value);
  } if (featureElevator.checked) {
    checkedFeaturesArray.push(featureElevator.value);
  }  if (featureconditioner.checked) {
    checkedFeaturesArray.push(featureconditioner.value);
  }
  return checkedFeaturesArray;
}; */

/* const filtrationFeatures = (data) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');

  const a = Array.from(checkedFeatures).every((input) => {
    console.log(data.offer.features.includes(input.value));
    return data.offer.features.includes(input.value);
  });
  console.log(a);
  return a;
}; */


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

    const finalCompare = secondCompare.filter((secondResult) => {
      return arrFilteredByGuestsNumber.some((guestsNumber) => {
        return secondResult === guestsNumber;
      });
    });

    console.log(finalCompare);

   // filtrationFeatures(serverData);

    getPins(finalCompare);
  });
});


const filterDataWrapper = ((serverData) => {
  filterData(serverData);
});

export {filterDataWrapper};





