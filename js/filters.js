//В форме с фильтрами реализовать филтрацию по параметрам
//т.е. показывать объявления с какими-то параметрами
const filterHousingType = document.querySelector('#housing-type');
const filterHousingPrice = document.querySelector('#housing-price');
const filterHousingRooms = document.querySelector('#housing-rooms');
const filterHousingGuests = document.querySelector('#housing-guests');



const MIN_PRICE = 10000;
const MAX_PRICE = 50000;



const filterData = ((serverData) => {

  filterHousingType.addEventListener('change', () => {

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
    });
    typeFilter();
  });

  filterHousingPrice.addEventListener('change', () => {

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
    });
    priceFilter();
  });

  filterHousingRooms.addEventListener('change', () => {

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
      console.log(arrFilteredByRoomsNumber);
    });
    roomsFilter();
  });


  filterHousingGuests.addEventListener('change', () => {

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
      console.log(arrFilteredByGuestsNumber);
    });
    guestsFilter();
  });

});


export {filterData};





