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
  const removeSuccess = () => addedSuccessPopup.remove();
  successButton.addEventListener('click', removeSuccess);
  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeSuccess();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  };
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.addedSuccessPopup')) {
      removeSuccess();
    }
    evt.stopPropagation();
  });
};

export {showSuccess};
