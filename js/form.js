const housingType = document.querySelector('select#type');
const formCheckinCheckout = document.querySelector('.ad-form__element--time');
const checkin = formCheckinCheckout.querySelector('#timein');
const checkout = formCheckinCheckout.querySelector('#timeout');


housingType.addEventListener('change', () => {

  switch (housingType.value) {
    case 'bungalow':
      document.querySelector('.ad-form__element #price').placeholder = '0';
      document.querySelector('.ad-form__element #price').setAttribute('min', '0');
      break;
    case 'flat':
      document.querySelector('.ad-form__element #price').placeholder = '1000';
      document.querySelector('.ad-form__element #price').setAttribute('min', '1000');
      break;
    case 'house':
      document.querySelector('.ad-form__element #price').placeholder = '5000';
      document.querySelector('.ad-form__element #price').setAttribute('min', '5000');
      break;
    case 'palace':
      document.querySelector('.ad-form__element #price').placeholder = '10000';
      document.querySelector('.ad-form__element #price').setAttribute('min', '10000');
      break;
  }

});

checkin.addEventListener('change', () => {
  switch (checkin.value) {
    case '12:00':
      checkout.value = '12:00';
      break;
    case '13:00':
      checkout.value = '13:00';
      break;
    case '14:00':
      checkout.value = '14:00';
      break;
  }
});

checkout.addEventListener('change', () => {
  switch (checkout.value) {
    case '12:00':
      checkin.value = '12:00';
      break;
    case '13:00':
      checkin.value = '13:00';
      break;
    case '14:00':
      checkin.value = '14:00';
      break;
  }
});


