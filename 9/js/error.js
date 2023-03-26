import {body} from './consts.js';
import {isEscapeKey} from './data.js';

const errorFragment = document.createDocumentFragment();

const showError = () => {
  const errorTemplate = document.querySelector('#error').content;
  const errorPopup = errorTemplate.cloneNode(true);
  errorFragment.appendChild(errorPopup);
  body.appendChild(errorFragment);

  const errorButton = document.querySelector('.error__button');
  const addedErrorPopup = document.querySelector('.error');
  const removeError = () => {
    addedErrorPopup.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  };
  function onDocumentKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeError();
    }
  }
  document.addEventListener('keydown', onDocumentKeydown);
  const onDocumentClick = (evt) => {
    if (evt.target === addedErrorPopup || evt.target === errorButton) {
      removeError();
      document.removeEventListener('click', onDocumentClick);
    }
    evt.stopPropagation();
  };
  document.addEventListener('click', onDocumentClick);
};

export {showError};
