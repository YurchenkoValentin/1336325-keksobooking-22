
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const houseType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalo: 'Бунгало',
};

const deleteEmptyElements = (parentNode) => {
  const child = parentNode.children;

  for (let element of child) {
    if (!element.hasChildNodes() && element.tagName !== 'IMG') {
      element.remove();
    }
  }

  return parentNode;
};

const createSimilarAdverts = (generateAds) => {
  const adElement = cardTemplate.cloneNode(true);
  const adFeatures = adElement.querySelector('.popup__features');
  const adPhotos = adElement.querySelector('.popup__photos');
  const photo = adElement.querySelector('.popup__photo');

  const generateFeatures = () => {
    adFeatures.innerHTML = '';
    generateAds.offer.features.forEach((item, i) => {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature', 'popup__feature--' + generateAds.offer.features[i]);
      adFeatures.appendChild(feature);
    });
  };

  const generatePhotos = () => {
    adPhotos.innerHTML = '';
    generateAds.offer.photos.forEach((item, i) => {
      photo.src = generateAds.offer.photos[i];
      adPhotos.appendChild(photo.cloneNode(true));
    });
  };

  adElement.querySelector('.popup__title').textContent = generateAds.offer.title;
  adElement.querySelector('.popup__text--address').textContent = generateAds.offer.address;
  adElement.querySelector('.popup__text--price').textContent = generateAds.offer.price + ' ₽/ночь';
  adElement.querySelector('.popup__type').textContent = houseType[generateAds.offer.type];
  adElement.querySelector('.popup__text--capacity').textContent = generateAds.offer.rooms + ' комнаты для ' + generateAds.offer.guests + ' гостей';
  adElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + generateAds.offer.checkin + ', выезд до ' + generateAds.offer.checkout;
  adElement.querySelector('.popup__description').textContent = generateAds.offer.description;
  adElement.querySelector('.popup__avatar').src = generateAds.author.avatar;
  generateFeatures();
  generatePhotos();

  return deleteEmptyElements(adElement);
};

export {createSimilarAdverts};
