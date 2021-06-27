
const getRandomInteger = function(min, max) {
  if (min >= 0 && min < max) {
    let result = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(result);
  }
  console.log('Диапазон значений указан неправильно');
};

console.log(getRandomInteger(12, 99));

// Источник формулы для расчета переменной result: https://learn.javascript.ru/task/random-int-min-max


const getRandomFloatNumber = function(min, max, numberDecimals) {
  if (min >= 0 && min < max) {
    let result = Math.random() * (max - min) + min;
    result = parseFloat(result.toFixed(numberDecimals));
    return result;
  }
  console.log('Диапазон значений указан неправильно');
};

console.log(getRandomFloatNumber(1.11, 1.12, 4));


const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png'
];

const TYPES = [
  'palace', 
  'flat', 
  'house', 
  'bungalow',
  'hotel'
];

const CHECKINS = [
  '12:00', 
  '13:00', 
  '14:00'
];

const CHECKOUTS = CHECKINS;

const FEATURES = [
  'wifi', 
  'dishwasher', 
  'parking', 
  'washer', 
  'elevator', 
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const SIMILAR_ANNOUNCEMENTS_COUNT = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
}

/*const getRandomLengthArray = (elements) => {
  const maxLength = elements.length;
  const randomLength = getRandomInteger(1, maxLength);
  const randomArray = []; 
  
  while (randomArray.length < randomLength) {
    const elementsIndex = getRandomInteger(0, maxLength - 1);
    const element = elements[elementsIndex];

    if (!randomArray.includes(element)) {
      randomArray.push(element);
    }
  }
  return randomArray;
} */

const createAnnouncement = () => {
  
  const announcement = {

    author: {
      avatar: getRandomArrayElement(AVATARS) // повторы???
    }, 

    offer: {
      title: 'Сдается в аренду',
      address: '',
      price: getRandomInteger(1, 1000),
      type: getRandomArrayElement(TYPES), 
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 50),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArrayElement(FEATURES), // массив случайной длины + повторы???
      description: 'Элитная квартира в старинном доме рядом с императорским дворцом',
      photos: getRandomArrayElement(PHOTOS) // массив случайной длины + повторы??? 
    },

    location: {
      lat: getRandomFloatNumber(35.65000, 35.70000, 5),
      lng: getRandomFloatNumber(139.70000, 139.80000, 5)
    }
  };
  
  announcement.offer.address = announcement.location;

  return announcement;
};

const similarAnnouncement = new Array(SIMILAR_ANNOUNCEMENTS_COUNT).fill(null).map(() => createAnnouncement());

console.log(similarAnnouncement);