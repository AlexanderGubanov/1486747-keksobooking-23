import { deactivatePage } from './form-activation.js';
import { activatePage } from './form-activation.js';
import { similarAnnouncements, renderTest } from './markup-generation.js';
deactivatePage();

const address = document.querySelector('#address'); // адрес
const resetButton = document.querySelector('.ad-form__reset');

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

address.value = '35.68950, 139.69200';

mainPinMarker.addTo(map);

// передаем новые координаты главной метки в поле "адрес"
mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  const {lat, lng} = coordinates;
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

// возвращение метки и карты в изначальное положение после нажатия кнопки "очистить"
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.6895,
    lng: 139.692,
  });

  map.setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);
});

// наносим на карту метки с баллунами
const createMarker = (announcement) => {
  const icon = L.icon({
    iconUrl: './../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(announcement.location, {icon});

  marker.addTo(map).bindPopup(renderTest(announcement), {keepInView: true});
};

similarAnnouncements.forEach((announcement) => {
  createMarker(announcement);
});
