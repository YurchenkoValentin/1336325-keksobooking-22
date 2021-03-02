/* global L:readonly */
import {createAdverts} from './data.js';
import {createSimilarAdverts} from './create-similar-ad.js';

const advertsArray = createAdverts();

const adForm = document.querySelector('.ad-form');
const formFildsets = adForm.querySelectorAll('fieldset');
const mapFiltersContainer = document.querySelector('.map__filters');
const mapFilters = mapFiltersContainer.querySelectorAll('.map__filter');
const mapFeatures = mapFiltersContainer.querySelectorAll('.map__features');
const mapContainer = document.querySelector('.map__canvas');

adForm.classList.add('ad-form--disabled');
mapFiltersContainer.classList.add('map__filters--disabled');

formFildsets.forEach((fildset) => {
  fildset.setAttribute('disabled', true);
});

mapFilters.forEach((filter) => {
  filter.setAttribute('disabled', true);
});

mapFeatures.forEach((feature) => {
  feature.setAttribute('disabled', true);
});

const map = L.map(mapContainer)
  .on('load', () => {
    console.log('Карта инициализирована');
    adForm.classList.remove('ad-form--disabled');
    mapFiltersContainer.classList.remove('map__filters--disabled');

    formFildsets.forEach((fildset) => {
      fildset.removeAttribute('disabled', true);
    });

    mapFilters.forEach((filter) => {
      filter.removeAttribute('disabled', true);
    });

    mapFeatures.forEach((feature) => {
      feature.removeAttribute('disabled', true);
    });
  })
  .setView({
    lat: 35.67636,
    lng: 139.69927,
  }, 14);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.67636,
    lng: 139.69927,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

advertsArray.forEach((advertisement) => {
  const lat = advertisement.location.x;
  const lng = advertisement.location.y;

  const pinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat,
    lng,
  },
  {
    icon: pinIcon,
  });

  marker
    .addTo(map).
    bindPopup(
      createSimilarAdverts(advertisement),
    );
});




/// НЕ ЗАБУДЬ ПЕРЕПОДКЛЮЧИТЬ СКРИПТЫ И СТИЛИ LEAFLET ЛОКАЛЬНО
