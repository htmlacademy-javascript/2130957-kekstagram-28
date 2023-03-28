import './scale.js';
import './effects.js';
import {imgUploadForm} from './consts.js';
import {showError} from './error.js';
import {sendData} from './api.js';

const MAX_AMOUNT_HASHTAGS = 5;
const MAX_AMOUNT_COMMENT = 140;
const CORRECT_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const SubmitButtonText = {
  DEFAULT: 'опубликовать',
  SENDING: 'Публикую...'
};
const uploadSubmit = document.querySelector('#upload-submit');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text__error'
});

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

const blockSubmitButton = () => {
  uploadSubmit.disabled = true;
  uploadSubmit.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  uploadSubmit.disabled = false;
  uploadSubmit.textContent = SubmitButtonText.DEFAULT;
};

const setUserFormSubmit = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(
          (err) => {
            showError(err);
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

export {textHashtags};
export {textDescription};
export {pristine};
export {setUserFormSubmit};
