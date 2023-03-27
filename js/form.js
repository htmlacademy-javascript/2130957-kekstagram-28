import {isEscapeKey} from './data.js';
import {body} from './consts.js';
import {resetScale} from './scale.js';
import './scale.js';
import './effects.js';
import {imgUploadForm} from './consts.js';
import {resetEffect} from './effects.js';
import {showSuccess} from './success.js';
import {showError} from './error.js';

const inputUploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');
const textHashtags = imgUploadOverlay.querySelector('.text__hashtags');
const textDescription = imgUploadOverlay.querySelector('.text__description');
const MAX_AMOUNT_HASHTAGS = 5;
const MAX_AMOUNT_COMMENT = 140;
const CORRECT_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text__error'
});

//Закрытие модального окна нажатием Esc
const onDocumentKeydown = (evt) => {
  if (evt.target === textHashtags || evt.target === textDescription) {
    evt.stopPropagation();
  } else {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUploadOverlay();
    }
  }
};
//Функция, открывающая модальное окно
const onUploadFile = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};
//Функция, закрывающая модальное окно
function closeUploadOverlay() {
  imgUploadForm.reset();
  pristine.reset();
  resetScale();
  resetEffect();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}
//Событие, отслеживающее загрузку изображения
inputUploadFile.addEventListener('change', onUploadFile);
//Закрытие модального окна по клику
uploadCancel.addEventListener('click', closeUploadOverlay);

//Функция, проверяющая лимит по символам у комментария
const validateComment = (value) => value.length <= MAX_AMOUNT_COMMENT;

pristine.addValidator(
  textDescription,
  validateComment,
  'Длина комментария не может составлять больше 140 символов'
);

const getHashTags = (value) => value.replace(/ +/g, ' ').trim().split(' ');
//Функция, проверяющая максимальное количество хэштегов
const countHashTags = (value) => {
  const hashTags = getHashTags(value);
  return hashTags.length <= MAX_AMOUNT_HASHTAGS;
};

pristine.addValidator(
  textHashtags,
  countHashTags,
  'Нельзя добавить больше 5 хэштегов'
);

//Функция, проверяющая правильность написания хэштега
const checkSpellingHashtag = (value) => {
  if (value !== '') {
    const hashTags = getHashTags(value);
    return hashTags.every((hashTag) => CORRECT_HASHTAG.test(hashTag));
  }
  return true;
};

pristine.addValidator(
  textHashtags,
  checkSpellingHashtag,
  'Хэштег должен начинаться с # и не может содержать пробелы, спецсимволы, символы пунктуации и смайлы'
);

//Функция на проверку дубликатов хэштегов
const checkDuplicateHashTags = (value) => {
  const hashTags = getHashTags(value);
  const lowerCaseHashTags = hashTags.map((hashTag) => hashTag.toLowerCase());
  return lowerCaseHashTags.length === new Set(lowerCaseHashTags).size;
};

pristine.addValidator(
  textHashtags,
  checkDuplicateHashTags,
  'Хэштеги не должны повторяться'
);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    showSuccess();
    closeUploadOverlay();
  } else {
    showError();
  }
});
