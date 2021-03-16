//import {createAdverts} from './data.js';
/* import {createSimilarAdverts} from './create-similar-ad.js';
createSimilarAdverts(); */

//createAdverts();

import {getData} from './backend.js';
import {getMapData} from './map.js';
import {filterData} from './filters.js';


getData((serverData) => {
  getMapData(serverData);
  filterData(serverData);
});




//// РАБОТАЕТ БЕЗ ОБРАБОТЧИКА
/* const filterData = ((serverData) => {
  const filteredData = serverData.filter((ad) => {
    return ad.offer.type === 'flat';
  });
  getMapData(filteredData);
}); */

