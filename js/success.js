import {body} from './consts.js';
import {isEscapeKey} from './data.js';

const successFragment = document.createDocumentFragment();

const showSuccess = () => {
  const successTemplate = document.querySelector('#success').content;
  const successPopup = successTemplate.cloneNode(true);
  successFragment.appendChild(successPopup);
  body.appendChild(successFragment);

  const successButton = document.querySelector('.success__button');
  const addedSuccessPopup = document.querySelector('.success');
  const removeSuccess = () => {
    addedSuccessPopup.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    successButton.removeEventListener('click', removeSuccess);
  };
  function onDocumentKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeSuccess();
    }
  }
  document.addEventListener('keydown', onDocumentKeydown);
  successButton.addEventListener('click', removeSuccess);
  const onDocumentClick = (evt) => {
    if (evt.target === addedSuccessPopup) {
      removeSuccess();
      document.removeEventListener('click', onDocumentClick);
    }
    evt.stopPropagation();
  };
  document.addEventListener('click', onDocumentClick);
};

export {showSuccess};
