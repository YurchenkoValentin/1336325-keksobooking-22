/* global L:readonly */
import {createSimilarAdverts} from './create-similar-ad.js';
import {getFilter} from './filters.js';

const DEFAULT_LAT = 35.67636;
const DEFAULT_LNG = 139.69927;
const DEFAULT_MAP_ZOOM = 14;
const ICON_WIDTH = 52;
const ICON_HEIGHT = 52;

const defaultMarkerLatLng = new L.LatLng(35.67636, 139.69927);

const getForm = () => adForm;

const adForm = document.querySelector('.ad-form');
const formFildsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const filters = mapFilters.querySelectorAll('fildset, select');
const mapContainer = document.querySelector('.map__canvas');

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  formFildsets.forEach((element) => {
    element.setAttribute = ('disabled', true);
  });
  mapFilters.classList.add('map__filters--disabled');
  filters.forEach((element) => {
    element.setAttribute = ('disabled', true);
  });
};

deactivatePage();

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  formFildsets.forEach((element) => {
    element.setAttribute = ('disabled', false);
  });
  mapFilters.classList.remove('map__filters--disabled');
  filters.forEach((element) => {
    element.setAttribute = ('disabled', false);
  });
};

const map = L.map(mapContainer)
  .on('load', deactivatePage).setView({lat: DEFAULT_LAT, lng: DEFAULT_LNG}, DEFAULT_MAP_ZOOM);


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH / 2, ICON_HEIGHT],
});

let mainPinMarker = '';

mainPinMarker = L.marker(
  {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  let formCoordinates = document.querySelector('.ad-form__element--wide #address');
  const coordinates = evt.target.getLatLng();
  const lat = coordinates.lat;
  const lng = coordinates.lng;
  formCoordinates.value = `${String(lat.toFixed(5))}, ${String(lng.toFixed(5))}`;
  return formCoordinates;
});

const markers = L.layerGroup().addTo(map);

const getPins = (advertsArray) => {
  markers.clearLayers();
  const filteredData = getFilter(advertsArray);
  filteredData
    .forEach((ad) => {
      const lat = ad.location.lat;
      const lng = ad.location.lng;

      const pinIcon = L.icon({
        iconUrl: '../img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker({lat,lng},{icon: pinIcon});
      marker.addTo(markers).bindPopup(createSimilarAdverts(ad));
    });
  activatePage();
};

export {DEFAULT_LAT, DEFAULT_LNG, DEFAULT_MAP_ZOOM, map, defaultMarkerLatLng, mainPinMarker, getForm, getPins};



