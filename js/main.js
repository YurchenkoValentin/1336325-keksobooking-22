import {getData} from './backend.js';
import {getMapData, map} from './map.js';
import {filterData} from './filters.js';


getData((serverData) => {
  filterData(serverData, map);
  getMapData(serverData, map);
});


