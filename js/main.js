import {getData} from './backend.js';
import {getPins} from './map.js';
import {changeFilter} from './filters.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

getData((serverData) => {

  getPins(serverData);
  changeFilter(debounce(
    () => getPins(serverData),
    RERENDER_DELAY,
  ));
});


