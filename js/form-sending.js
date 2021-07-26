
import {formSentSuccess} from './util.js';
import {formSentError} from './util.js';

const adForm = document.querySelector('.ad-form');

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        formSentSuccess();
      } else {
        formSentError();
      }
    })
    .catch(() => {
      formSentError();
    });
});
