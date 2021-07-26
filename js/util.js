const main = document.querySelector('main');
const adForm = main.querySelector('.ad-form');
const address = adForm.querySelector('#address');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error-button');
const errorGetdataTemplate = document.querySelector('#error-getdata').content.querySelector('.error');

const successModal = successTemplate.cloneNode(true);
const errorModal = errorTemplate.cloneNode(true);
const errorGetData = errorGetdataTemplate.cloneNode(true);

const setAddress = () => {
  address.value = '35.68950, 139.69200';
};

const formSentSuccess = () => {
  adForm.reset();
  setTimeout(setAddress, 100);
  main.appendChild(successModal);

  successModal.addEventListener('click', () => {
    successModal.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      successModal.remove();
    }
  });
};

const formSentError = () => {
  main.appendChild(errorModal);

  errorModal.addEventListener('click', () => {
    errorModal.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      errorModal.remove();
    }
  });

  errorButton.addEventListener('click', () => {
    errorModal.remove();
  });
};

const getDataError = () => {
  main.appendChild(errorGetData);

  errorGetData.addEventListener('click', () => {
    errorGetData.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      errorGetData.remove();
    }
  });
};

export {setAddress, formSentSuccess, formSentError, getDataError};
