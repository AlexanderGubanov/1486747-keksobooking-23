const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const titleAnnouncement = document.querySelector('#title');

const MAX_PRICE = 1000000;
const pricePerNight = document.querySelector('#price');

const roomsNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const typeOfHousing = document.querySelector('#type');

const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

/*
const adForm = document.querySelector('.ad-form');

adForm.addEventListener('submit', function(evt) {
  evt.preventDefoult();
  if () {
    вывод сообщения об ошибке
  }
  this.submit();
});
*/

// валидация заголовка
titleAnnouncement.addEventListener('input', () => {
  const titleLength = titleAnnouncement.value.length;
  if (titleLength === 0) {
    titleAnnouncement.setCustomValidity(('Заголовок объявления должен содержать от 30 до 100 символов'));
  } else if (titleLength < MIN_TITLE_LENGTH) {
    titleAnnouncement.setCustomValidity(`Нужно ввести еще не меньше ${MIN_TITLE_LENGTH - titleLength} симв.`);
  } else if (titleLength === MAX_TITLE_LENGTH) {
    titleAnnouncement.setCustomValidity('Заголовок объявления не может содержать больше 100 символов. Сейчас их 100');
  } else {
    titleAnnouncement.setCustomValidity('');
  }
  titleAnnouncement.reportValidity();
});

// валидация цены
pricePerNight.addEventListener('input', () => {
  const priceValue = pricePerNight.value;
  if (priceValue > MAX_PRICE) {
    pricePerNight.setCustomValidity('Цена не должна превышать 1000000 руб.');
  } else if (priceValue < 0) {
    pricePerNight.setCustomValidity('Цена не может быть отрицательной');
  } else {
    pricePerNight.setCustomValidity('');
  }
  pricePerNight.reportValidity();
});

// Время заезда и выезда
timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

// валидация соответствия количества гостей количеству комнат
roomsNumber.addEventListener('change', () => {
  if (roomsNumber.value === '1') {
    capacity.value = '1';
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[3].disabled = true;
  } else if (roomsNumber.value === '2') {
    capacity.value = '2';
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = false;
    capacity.options[2].disabled = false;
    capacity.options[3].disabled = true;
  } else if (roomsNumber.value === '3') {
    capacity.value = '3';
    capacity.options[0].disabled = false;
    capacity.options[1].disabled = false;
    capacity.options[2].disabled = false;
    capacity.options[3].disabled = true;
  } else if (roomsNumber.value === '100') {
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[2].disabled = true;
    capacity.value = '0';
  }
});

capacity.addEventListener('focus', () => {
  if (roomsNumber.value === '1') {
    capacity.value = '1';
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[3].disabled = true;
  }
});

// зависимость цены от типа жилья
typeOfHousing.addEventListener('change', () => {
  const selectedType = MIN_PRICE[typeOfHousing.value];
  pricePerNight.setAttribute('min', selectedType);
  pricePerNight.setAttribute('placeholder', selectedType);
});

/*capacity.addEventListener('change', () => {
  if (capacity.value === '3') {
    roomsNumber.options[0].disabled = false;
    roomsNumber.options[1].disabled = false;
    roomsNumber.options[2].disabled = false;
    roomsNumber.options[3].disabled = true;
  } else if (capacity.value === '2') {
    roomsNumber.options[0].disabled = false;
    roomsNumber.options[1].disabled = false;
    roomsNumber.options[2].disabled = true;
    roomsNumber.options[3].disabled = true;
  } else if (capacity.value === '1') {
    roomsNumber.options[0].disabled = false;
    roomsNumber.options[1].disabled = true;
    roomsNumber.options[2].disabled = true;
    roomsNumber.options[3].disabled = true;
  } else if (capacity.value === '0') {
    roomsNumber.options[0].disabled = true;
    roomsNumber.options[1].disabled = true;
    roomsNumber.options[2].disabled = true;
    roomsNumber.options[3].disabled = false;
  }
});

const selectRoomsAndGuests = function(rooms, beds) {
  return function (event) {
    const value = rooms.value;
    const options = beds.options;
    const optionsLength = options.length;

    for (let i = 0; i < optionsLength; i++) {
      options[i].disabled = true;
      if (+options[i].value === 0 && +value === 100) {
        options[i].selected = true;
        options[i].disabled = false;
      }
      if (options[i].value < value && +options[i].value !== 0) {
        options[i].disabled = false;
      }
      if (options[i].value === value) {
        options[i].selected = true;
        options[i].disabled = false;
      }
    }
  };
};

roomsNumber.addEventListener('change', selectRoomsAndGuests(roomsNumber, capacity));

roomsNumber.addEventListener('input', () => {
  if (roomsNumber.value === '1' && capacity.value !== '1') {
  roomsNumber.setCustomValidity('Одна комната не может вместить больше одного гостя');

  roomsNumber.addEventListener('input', () => {
  if (roomsNumber.value === '1') {
    capacity.childNodes[0].remove();

titleAnnouncement.addEventListener('invalid', () => {
  if (titleAnnouncement.validity.tooShort) {
    titleAnnouncement.setCustomValidity('Заголовок объявления должен состоять как минимум из 30 символов');
  } else if (titleAnnouncement.validity.tooLong) {  // эта ветка не нужна
    titleAnnouncement.setCustomValidity('Заголовок объявления не должен превышать 100 символов');
  } else if (titleAnnouncement.validity.valueMissing) {
    titleAnnouncement.setCustomValidity('Обязательное поле');
  } else {
    titleAnnouncement.setCustomValidity('');
  }
});

const ROOMS_GUESTS_BIJECTION = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

}*/
