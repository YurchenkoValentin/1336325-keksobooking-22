//import {createAdverts} from './data.js';
/* import {createSimilarAdverts} from './create-similar-ad.js';
createSimilarAdverts(); */

//createAdverts();

import {getData} from './backend.js';
import {getMapData} from './map.js';

getData((defaultData) => {
  getMapData(defaultData);
});



// ЧТО ЯВЛЯЕТСЯ ПАРАМЕТРОМ el ????

