import { deactivatePage } from './form-activation.js';
import { activatePage } from './form-activation.js';
import { renderAnnouncement } from './markup-generation.js';
import { createFetch } from './get-data.js';
import { setAddress } from './util.js';

deactivatePage();

const adForm = document.querySelector('.ad-form');
const address = adForm.querySelector('#address');

const resetButton = document.querySelector('.ad-form__reset');

const SIMILAR_ANNOUNCEMENT_COUNT = 10;

const map = L.map('map-canvas').on('load', () => {
  activatePage();
})
  .setView({
    lat: 35.68950,
    lng: 139.69200,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// устанавливаем главную метку
const mainPinIcon = L.icon({
  iconUrl: './../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69200,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

setAddress();

mainPinMarker.addTo(map); // добавляем главную метку на карту

// передаем новые координаты главной метки в поле "адрес"
mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  const {lat, lng} = coordinates;
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

// возвращение метки и карты в изначальное положение после нажатия кнопки "очистить"
resetButton.addEventListener('click', () => {
  setTimeout(setAddress, 100);
});

// наносим на карту метки с баллунами
const createMarker = (announcement) => {
  const icon = L.icon({
    iconUrl: './../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(announcement.location, {icon});

  marker.addTo(map).bindPopup(renderAnnouncement(announcement), {keepInView: true});
};

const fetchAnnouncements = createFetch(
  (announcements) => {
    const similarAnnouncements = announcements.slice(0, SIMILAR_ANNOUNCEMENT_COUNT);
    similarAnnouncements.forEach((announcement) => {
      createMarker(announcement);
    });
  },
  (err) => {
    console.log(err);
  });

fetchAnnouncements();
