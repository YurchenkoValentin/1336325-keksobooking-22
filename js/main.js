//import {createAdverts} from './data.js';
/* import {createSimilarAdverts} from './create-similar-ad.js';
createSimilarAdverts(); */

//createAdverts();

import {getData} from './backend.js';
import {getMapData} from './map.js';

getData ((el) => {
  getMapData(el);
});



// ЧТО ЯВЛЯЕТСЯ ПАРАМЕТРОМ el ????

