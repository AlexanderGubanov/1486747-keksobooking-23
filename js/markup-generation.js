import {getAnnouncements} from './data.js';  // импортируем функцию, генерирующую объявления

const card = document.querySelector('#card').content; // находим шаблон

const mapCanvas = document.querySelector('#map-canvas');  // находим контейнер для размещения объявлений

const typesRus = { // русифицируем типы жилья
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarAnnouncements = getAnnouncements();  // генерируем массив с данными для 10 объявлений

const renderTest = function(announcement) {
  const announcementCard = card.cloneNode(true);  // клонируем шаблон

  const offerTitle = announcementCard.querySelector('.popup__title');  // заголовок
  const offerAddress = announcementCard.querySelector('.popup__text--address'); // адрес
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
  offerAddress.textContent = announcement.offer.address;
  offerPrice.textContent = `${announcement.offer.price} ₽/ночь`;
  offerType.textContent = typesRus[announcement.offer.type];
  offerCapacity.textContent = `${announcement.offer.rooms} комнаты для ${announcement.offer.guests} гостей`;
  offerTime.textContent = `Заезд после ${announcement.offer.checkin}, выезд до ${announcement.offer.checkout}`;

  offerFeatures.forEach((element) => {
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

  announcement.offer.photos.forEach((urlPhoto) => { // фото
    const singlePhoto = offerPhoto.cloneNode(true);
    singlePhoto.src = urlPhoto;
    offerPhotos.appendChild(singlePhoto);
  });

  authorAvatar.src = announcement.author.avatar;  // меняем аватарку

  for (let i = 0; i < announcementCard.children.length; i++) {  // скрываем блоки, не имеющие содержания
    if (announcementCard.children[i] === null) {
      announcementCard.children[i].classList.add('visually-hidden');
    }
  }

  mapCanvas.appendChild(announcementCard);  // добавляем объявление в контейнер
};

renderTest(similarAnnouncements[0]);

/*offerFeatures.textContent = announcement.offer.features;

for (let i = 0; i < announcement.offer.photos.length; i++) {  // добавляем фотографии
    offerPhotos.createElement(announcement.offer.photos[i]);
  }

announcementCard.children.forEach((cardElement) => {
    if (cardElement.textContent === null) {
      cardElement.classList.add('visually-hidden');
    }
  });

similarAnnouncements.forEach((announcement) => {  // наполняем карточки объявлений данными из массива
  offerTitle.textContent = announcement.offer.title;
  offerAddress.textContent = announcement.offer.address;
  offerPrice.textContent = announcement.offer.price + ' ₽/ночь';
  offerType.textContent = typesRus[announcement.offer.type];
  offerCapacity.textContent = announcement.offer.rooms + ' комнаты для ' + announcement.offer.guests + ' гостей';
  offerTime.textContent = 'Заезд после ' + announcement.offer.checkin + ', выезд до ' + announcement.offer.checkout;
  offerFeatures.textContent = announcement.offer.features;
  offerDescription.textContent = announcement.offer.description;

  for (const i = 0; i < announcement.offer.photos.length; i++) {  // добавляем фотографии
    offerPhotos.createElement(announcement.offer.photos[i]);
  }

  authorAvatar.src = announcement.author.avatar;  // меняем аватарку

  for (const i = 0; i < announcementCard.children.length; i++) {  // скрываем блоки, не имеющие содержания
    if (announcementCard.children[i] == null) {
      announcementCard.children[i].classList.add('visually-hidden');
    }
  }
  mapCanvas.appendChild(announcementCard);  // добавляем объявление в контейнер
});

  announcementCard.querySelector('.popup__title').textContent = announcement.offer.title;  // заголовок
  announcementCard.querySelector('.popup__text--address').textContent = announcement.offer.address; // адрес
  announcementCard.querySelector('.popup__text--price').textContent = announcement.offer.price + ' ₽/ночь'; // цена
  announcementCard.querySelector('.popup__type').textContent = announcement.offer.type; // тип жилья
  announcementCard.querySelector('.popup__capacity').textContent = announcement.offer.rooms + ' комнаты для ' + announcement.offer.guests + ' гостей'; // тип жилья
  announcementCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + announcement.offer.checkin + ', выезд до ' + announcement.offer.checkout; //
  announcementCard.querySelector('.popup__features').textContent = announcement.offer.features;
  announcementCard.querySelector('.popup__description').textContent = announcement.offer.description;
  announcementCard.querySelector('.popup__photos').textContent = announcement.offer.photos;

<!-- Карточка объявления -->
<template id="card">
  <article class="popup">
    <img src="img/avatars/user01.png" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
    <h3 class="popup__title">Уютное гнездышко для молодоженов</h3>
    <p class="popup__text popup__text--address">102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3</p>
    <p class="popup__text popup__text--price">5200 <span>₽/ночь</span></p>
    <h4 class="popup__type">Квартира</h4>
    <p class="popup__text popup__text--capacity">2 комнаты для 3 гостей</p>
    <p class="popup__text popup__text--time">Заезд после 14:00, выезд до 10:00</p>
    <ul class="popup__features">
      <li class="popup__feature popup__feature--wifi"></li>
      <li class="popup__feature popup__feature--dishwasher"></li>
      <li class="popup__feature popup__feature--parking"></li>
      <li class="popup__feature popup__feature--washer"></li>
      <li class="popup__feature popup__feature--elevator"></li>
      <li class="popup__feature popup__feature--conditioner"></li>
    </ul>
    <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
    <div class="popup__photos">
      <img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья">
    </div>
  </article>
</template>
*/
