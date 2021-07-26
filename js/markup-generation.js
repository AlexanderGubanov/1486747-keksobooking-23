const card = document.querySelector('#card').content.querySelector('article.popup'); // находим шаблон

const TYPES_RUS = { // русифицируем типы жилья
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const renderAnnouncement = (announcement) => {
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
  offerType.textContent = TYPES_RUS[announcement.offer.type];
  offerCapacity.textContent = `${announcement.offer.rooms} комнаты для ${announcement.offer.guests} гостей`;
  offerTime.textContent = `Заезд после ${announcement.offer.checkin}, выезд до ${announcement.offer.checkout}`;

  if (announcement.offer.features) {
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
  }

  if (announcement.offer.description) {
    offerDescription.textContent = announcement.offer.description;
  }

  if (announcement.offer.photos) {
    announcement.offer.photos.forEach((urlPhoto) => { // фото
      const singlePhoto = offerPhoto.cloneNode(true);
      singlePhoto.src = urlPhoto;
      offerPhotos.appendChild(singlePhoto);
    });
  } else {
    offerPhotos.classList.add('visually-hidden');
  }

  if (announcement.offer.photos) {
    authorAvatar.src = announcement.author.avatar;  // меняем аватарку
  }

  return announcementCard;
};

export {renderAnnouncement};
