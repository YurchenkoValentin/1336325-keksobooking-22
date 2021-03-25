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

const filtrationFeatures = (data) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');

  const a = Array.from(checkedFeatures).every((input) => {
    console.log(data.offer.features.includes(input.value));
    return data.offer.features.includes(input.value);
  });
  return a;
};

const getFilter = (data) => {

  if ((data.offer.type === housingType.value || housingType.value === DEFAULT_TYPE)
  && (data.offer.rooms === +housingRooms.value || housingRooms.value === DEFAULT_TYPE)
  && (filtrationPrice(data) || housingPrice.value === DEFAULT_TYPE)
  && (data.offer.guests === +housingGuests.value || housingGuests.value === DEFAULT_TYPE)
  && (filtrationFeatures(data))
  ) {
    return data;
  }
  return false;
};

const changeFilter = (onFilterClick) => {
  mapFilters.addEventListener('change', () => {
    onFilterClick();
  });
};

export {getFilter, changeFilter};
