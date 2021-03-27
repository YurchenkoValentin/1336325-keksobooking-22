const DEFAULT_TYPE = 'any';
const Price = {
  LOW: 10000,
  HIGH: 50000,
};
const onMapFiltersChange = document.querySelector('.map__filters');
const housingType = onMapFiltersChange.querySelector('#housing-type');
const housingRooms = onMapFiltersChange.querySelector('#housing-rooms');
const housingPrice = onMapFiltersChange.querySelector('#housing-price');
const housingGuests = onMapFiltersChange.querySelector('#housing-guests');
const housingFeatures = onMapFiltersChange.querySelector('#housing-features');


const filterPrice = (data) => {
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

const filterFeatures = (serverData) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');

  const adCheckingIncludesBoolean = Array.from(checkedFeatures).every((input) => {
    return serverData.offer.features.includes(input.value);
  });
  return adCheckingIncludesBoolean;
};

const getFilter = (serverData) => {
  if ((serverData.offer.type === housingType.value || housingType.value === DEFAULT_TYPE)
  && (serverData.offer.rooms === +housingRooms.value || housingRooms.value === DEFAULT_TYPE)
  && (filterPrice(serverData) || housingPrice.value === DEFAULT_TYPE)
  && (serverData.offer.guests === +housingGuests.value || housingGuests.value === DEFAULT_TYPE)
  && (filterFeatures(serverData))) {
    return serverData;
  } else {
    return false;
  }
};

const changeFilter = (selectedFilters) => {
  onMapFiltersChange.addEventListener('change', () => {
    selectedFilters();
  });
};

export {getFilter, changeFilter};
