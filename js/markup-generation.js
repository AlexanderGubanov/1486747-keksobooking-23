import {getAnnouncements} from './data.js';  // импортируем функцию, генерирующую объявления

const card = document.querySelector('#card').content.querySelector('article.popup'); // находим шаблон

//const mapCanvas = document.querySelector('#map-canvas');  // находим контейнер для размещения объявлений

const typesRus = { // русифицируем типы жилья
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarAnnouncements = getAnnouncements();  // генерируем массив с данными для 10 объявлений

const renderTest = (announcement) => {
  const announcementCard = card.cloneNode(true);  // клонируем шаблон

  const offerTitle = announcementCard.querySelector('.popup__title');  // заголовок
  const offerPrice = announcementCard.querySelector('.popup__text--price'); // цена
  const offerType = announcementCard.querySelector('.popup__type'); // тип жилья
  const offerCapacity = announcementCard.querySelector('.popup__text--capacity'); // вместимость
  const offerTime = announcementCard.querySelector('.popup__text--time'); // время
  const offerFeaturesTemplate = announcementCard.querySelector('.popup__features'); // блок с удобствами
  const offerFeatures = offerFeaturesTemplate.querySelectorAll('.popup__feature'); // удобства
  const offerDescription = announcementCard.querySelector('.popup__description'); // описание
  const offerPhotos = announcementCard.querySelector('.popup__photos'); // блок с фото
  const offerPhoto = offerPhotos.querySelector('.popup__photo'); // фото
  const authorAvatar = announcementCard.querySelector('.popup__avatar'); // аватар автора

  offerTitle.textContent = announcement.offer.title;
  offerPrice.textContent = `${announcement.offer.price} ₽/ночь`;
  offerType.textContent = typesRus[announcement.offer.type];
  offerCapacity.textContent = `${announcement.offer.rooms} комнаты для ${announcement.offer.guests} гостей`;
  offerTime.textContent = `Заезд после ${announcement.offer.checkin}, выезд до ${announcement.offer.checkout}`;

  offerFeatures.forEach((element) => {  // убираем ненужные удобства
    let isFeature = false;
    announcement.offer.features.forEach((featureName) => {
      if (element.classList.contains(`popup__feature--${featureName}`)) {
        isFeature = true;
      }
    });
    if (!isFeature) {
      element.remove();
    }
  });

  offerDescription.textContent = announcement.offer.description;
  if (offerDescription.textContent === '') {  // проверка на пустоту содержания
    offerDescription.classList.add('visually-hidden');
  }

  announcement.offer.photos.forEach((urlPhoto) => { // фото
    const singlePhoto = offerPhoto.cloneNode(true);
    singlePhoto.src = urlPhoto;
    offerPhotos.appendChild(singlePhoto);
  });

  authorAvatar.src = announcement.author.avatar;  // меняем аватарку
  if (authorAvatar.src === 'http://localhost:3000/') {  // проверка на пустоту содержания
    authorAvatar.classList.add('visually-hidden');
  }

  return announcementCard;

  //mapCanvas.appendChild(announcementCard);  // добавляем объявление в контейнер
};

export {similarAnnouncements, renderTest};

/*
const points = [
  {
    title: 'Футура',
    lat: 59.96925,
    lng: 30.31730,
  },
  {
    title: 'Шаверма',
    lat: 59.96783,
    lng: 30.31258,
  },
  {
    title: 'Франк',
    lat: 59.95958,
    lng: 30.30228,
  },
  {
    title: 'Ginza',
    lat: 59.97292,
    lng: 30.31982,
  },
];

const renderTest = (points) => {
  const announcementCard = card.cloneNode(true);  // клонируем шаблон

  const offerTitle = announcementCard.querySelector('.popup__title');  // заголовок
  const offerDescription = announcementCard.querySelector('.popup__description'); // описание

  offerTitle.textContent = announcement.offer.title;
  offerDescription.textContent = announcement.offer.description;

  }

  return announcementCard;*/
