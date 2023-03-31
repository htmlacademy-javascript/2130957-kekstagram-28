import {body} from './consts.js';
import { isEscapeKey } from './util.js';
import {closeUploadOverlay} from './user-modal.js';

const successFragment = document.createDocumentFragment();
const successTemplate = document.querySelector('#success').content;

//Функция, добавляющая попап Success на страницу
const showSuccess = () => {
  closeUploadOverlay();
  const successPopup = successTemplate.cloneNode(true);
  successFragment.appendChild(successPopup);
  body.appendChild(successFragment);
  const successButton = document.querySelector('.success__button');
  document.addEventListener('keydown', onDocumentKeydownPopup);
  document.addEventListener('click', onDocumentClick);
  successButton.addEventListener('click', removeSuccess);
};

//Функция, получающая переменную с попапом
const getSuccessPopup = () => document.querySelector('.success');

//Функция, удаляющая попап
function removeSuccess () {
  const addedSuccessPopup = getSuccessPopup();
  addedSuccessPopup.remove();
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('click', removeSuccess);
  document.removeEventListener('keydown', onDocumentKeydownPopup);
}

//Функция, закрывающая попап по клику на произвольную область экрана за пределами
function onDocumentClick(evt) {
  const addedSuccessPopup = getSuccessPopup();
  if (evt.target === addedSuccessPopup) {
    removeSuccess();
  }
}

//Функция, закрывающая попап по нажатию кнопки Esc
function onDocumentKeydownPopup(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeSuccess();
  }
}

export {showSuccess};
