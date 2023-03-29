const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const EFFECTS = [
  {
    value: 'none',
    style: 'none',
    min: 0,
    max: 0,
    step: 0,
    unit: ''
  },
  {
    value: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    value: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    value: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    value: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    value: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
];

const ALERT_SHOW_TIME = 5000;
const MAX_AMOUNT_HASHTAGS = 5;
const MAX_AMOUNT_COMMENT = 140;
const CORRECT_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const SCALE_STEP = 25;
const MIN_SCALE_STEP = 25;
const MAX_SCALE_STEP = 100;

const CLASSES = ['effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none'];

const imgUploadPreview = document.querySelector('.img-upload__preview img');


export {EFFECTS, imgUploadPreview, body, imgUploadForm, sliderContainer, SCALE_STEP, CLASSES, ALERT_SHOW_TIME, MAX_AMOUNT_HASHTAGS, MAX_AMOUNT_COMMENT, CORRECT_HASHTAG, MIN_SCALE_STEP, MAX_SCALE_STEP};
