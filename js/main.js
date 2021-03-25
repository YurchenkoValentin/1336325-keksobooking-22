import {getData} from './backend.js';
import {getPins} from './map.js';
import {changeFilter} from './filters.js';
import {debounce} from './util.js';

const DEBOUNCE_DELAY = 500;

getData((serverData) => {

  getPins(serverData);
  changeFilter(debounce(
    () => getPins(serverData),
    DEBOUNCE_DELAY,
  ));
});


