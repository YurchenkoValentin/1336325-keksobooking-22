//import {createAdverts} from './data.js';
/* import {createSimilarAdverts} from './create-similar-ad.js';
createSimilarAdverts(); */

//createAdverts();

import {getData} from './backend.js';
import {getMapData, map} from './map.js';
import {filterData} from './filters.js';


getData((serverData) => {
  filterData(serverData, map);
  getMapData(serverData, map);
});



/* //// РАБОТАЕТ БЕЗ ОБРАБОТЧИКА
const filterData = ((serverData) => {
  const filteredData = serverData.filter((ad) => {
    return ad.offer.type === 'flat';
  });
  getMapData(filteredData);
});
 */
