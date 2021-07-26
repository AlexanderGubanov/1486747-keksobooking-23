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

// соответствие между количеством гостей и количеством комнат
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
    capacity.value = '0';
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[2].disabled = true;
    capacity.options[3].disabled = false;
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

// зависимость мин. цены от типа жилья
typeOfHousing.addEventListener('change', () => {
  const selectedType = MIN_PRICE[typeOfHousing.value];
  pricePerNight.setAttribute('min', selectedType);
  pricePerNight.setAttribute('placeholder', selectedType);
});
