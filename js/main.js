import {getData} from './backend.js';
import {getMapData, map} from './map.js';
import {filterDataWrapper} from './filters.js';


getData((serverData) => {
  filterDataWrapper(serverData, map);
  getMapData(serverData, map);
});


