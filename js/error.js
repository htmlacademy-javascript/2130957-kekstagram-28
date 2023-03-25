import {body} from './consts.js';
import {isEscapeKey} from './data.js';

const errorFragment = document.createDocumentFragment();

const showError = () => {
  const errorTemplate = document.querySelector('#error').content;
  const errorPopup = errorTemplate.cloneNode(true);
  errorFragment.appendChild(errorPopup);
  body.appendChild(errorFragment);

  const successButton = document.querySelector('.error__button');
  const addedErrorPopup = document.querySelector('.error');
  const removeError = () => addedErrorPopup.remove();
  successButton.addEventListener('click', removeError);
  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeError();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  };
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.addedSuccessPopup')) {
      removeError();
    }
    evt.stopPropagation();
  });
};

export {showError};
