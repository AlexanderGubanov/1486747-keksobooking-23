const adForm = document.querySelector('.ad-form');
const inputsForm = adForm.querySelectorAll('input');
const selectsForm = adForm.querySelectorAll('select');
const textArea = adForm.querySelector('#description');

const mapFilters = document.querySelector('.map__filters');
const inputsMapFilters = mapFilters.querySelectorAll('input');
const selectsMapFilters = mapFilters.querySelectorAll('select');

const deactivatePage = function() {
  adForm.classList.add('ad-form--disabled');
  inputsForm.forEach((inputs) => {
    inputs.disabled;
  });
  selectsForm.forEach((selects) => {
    selects.disabled;
  });
  textArea.disabled;

  mapFilters.classList.add('map__filters--disabled');
  inputsMapFilters.forEach((inputs) => {
    inputs.disabled;
  });
  selectsMapFilters.forEach((selects) => {
    selects.disabled;
  });
};

const activatePage = function() {

  adForm.classList.remove('ad-form--disabled');
  inputsForm.forEach((inputs) => {
    inputs.disabled = false;
  });
  selectsForm.forEach((selects) => {
    selects.disabled = false;
  });
  textArea.disabled = false;

  mapFilters.classList.remove('map__filters--disabled');
  inputsMapFilters.forEach((inputs) => {
    inputs.disabled = false;
  });
  selectsMapFilters.forEach((selects) => {
    selects.disabled = false;
  });
};

export {deactivatePage, activatePage};
