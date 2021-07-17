const adForm = document.querySelector('.ad-form');
const inputsForm = adForm.querySelectorAll('input');

const mapFilters = document.querySelector('.map__filters');
const inputsMapFilters = mapFilters.querySelectorAll('input');

const deactivatePage = function() {
  adForm.classList.add('ad-form--disabled');
  inputsForm.forEach((inputs) => {
    inputs.disabled;
  });
  mapFilters.classList.add('map__filters--disabled');
  inputsMapFilters.forEach((inputs) => {
    inputs.disabled;
  });
};

const activatePage = function() {
  adForm.classList.remove('ad-form--disabled');
  inputsForm.forEach((inputs) => {
    inputs.disabled = false;
  });

  mapFilters.classList.remove('map__filters--disabled');
  inputsMapFilters.forEach((inputs) => {
    inputs.disabled = false;
  });
};

export {deactivatePage, activatePage};

deactivatePage();

/*
lf (type.textContent === 'Бунгало') {
    price.min.textContent = 0;
    price.placeholder.textContent = 0;
}

*/


