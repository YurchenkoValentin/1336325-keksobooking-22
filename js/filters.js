//В форме с фильтрами реализовать филтрацию по параметрам
//т.е. показывать объявления с какими-то параметрами


/* const filteredByType  = (dataArr) => {
  const filterHousingType = document.querySelector('#housing-type');

  filterHousingType.addEventListener('change', () => {

    const newArr = dataArr.slice();

    dataArr.forEach((item) => {
      if (filterHousingType.value === 'flat') {
        if (item.offer.type === 'flat') {
          return item;
        }
      }
    });

  });
}; */

const filterData = ((serverData) => {
  serverData.forEach((ad) => {
    if (ad.offer.type === 'flat') {
      console.log(ad);
    }
  });
});

export {filterData};


