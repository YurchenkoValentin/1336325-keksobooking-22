const DEFAULT_TYPE = 'any';
const Price = {
  LOW: 10000,
  HIGH: 50000,
};
const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');


const filtrationPrice = (data) => {
  switch (housingPrice.value) {
    case 'low':
      return data.offer.price < Price.LOW;
    case 'middle':
      return data.offer.price >= Price.LOW && data.offer.price < Price.HIGH;
    case 'high':
      return data.offer.price >= Price.HIGH;
    default:
      return true;
  }
};

const filtrationFeatures = (serverData) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');

  const adCheckingIncludesBoolean = Array.from(checkedFeatures).every((input) => {
    return serverData.offer.features.includes(input.value);
  });
  return adCheckingIncludesBoolean;
};

const getFilter = (serverData) => {
  if ((serverData.offer.type === housingType.value || housingType.value === DEFAULT_TYPE)
  && (serverData.offer.rooms === +housingRooms.value || housingRooms.value === DEFAULT_TYPE)
  && (filtrationPrice(serverData) || housingPrice.value === DEFAULT_TYPE)
  && (serverData.offer.guests === +housingGuests.value || housingGuests.value === DEFAULT_TYPE)
  && (filtrationFeatures(serverData))) {
    return serverData;
  } else {
    return false;
  }
};

const changeFilter = (selectedFilters) => {
  mapFilters.addEventListener('change', () => {
    selectedFilters();
  });
};

export {getFilter, changeFilter};
