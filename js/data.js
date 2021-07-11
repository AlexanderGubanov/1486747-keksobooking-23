import {
  getRandomInteger,
  getRandomFloatNumber,
  getRandomArrayElement,
  getRandomNonrepeatingElement,
  getRandomLengthArray
} from './util';

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
  'img/avatars/user10.png',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = CHECKINS;

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_ANNOUNCEMENTS_COUNT = 10;

const createAnnouncement = () => {

  const announcement = {

    author: {
      avatar: getRandomNonrepeatingElement(AVATARS),
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
      features: getRandomLengthArray(FEATURES),
      description: 'Элитная квартира в старинном доме рядом с императорским дворцом',
      photos: getRandomLengthArray(PHOTOS),
    },

    location: {
      lat: getRandomFloatNumber(35.65000, 35.70000, 5),
      lng: getRandomFloatNumber(139.70000, 139.80000, 5),
    },
  };

  announcement.offer.address = String(announcement.location.lat), String(announcement.location.lng);

  return announcement;
};

const similarAnnouncement = new Array(SIMILAR_ANNOUNCEMENTS_COUNT).fill(null).map(() => createAnnouncement());

similarAnnouncement();
