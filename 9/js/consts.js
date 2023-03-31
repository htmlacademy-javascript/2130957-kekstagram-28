const MAX_COMMENTS = 16;
const AVATAR_COUNT = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENT_ID = 300;
const PHOTOS_COUNT = 25;
const DESCRIPTIONS = [
  'Фотография на фоне гор',
  'Фотография на фоне моря',
  'Фотография в городе',
  'Селфи на фоне деревьев',
  'Кот сидит на балконе',
  'Группа людей в аудитории',
  'Фотография еды в кафе',
  'Неопознанный летающий объект',
  'Закат солнца на фоне реки',
  'Быт в деревне',
  'Мы на концерте'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Вполне хорошая фотография',
  'Чудесно! Я тоже так хочу научиться фотографировать',
  'Могу дать пару уроков фотографа',
  'Сойдёт для сельской местности',
  'ВАУ! Какая красотааа',
  'Тоже хочу так отдыхать!',
  'Зачем фотографировать еду?',
  'Я думаю фотографировать это не ваше'
];
const FIRST_NAMES = [
  'Олег',
  'Артём',
  'Вася',
  'Пётр',
  'Саша',
  'Алёна',
  'Ольга',
  'Софья',
  'Наталья'
];
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

const CLASSES = ['effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none'];

const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;

export {EFFECTS};
export {imgUploadPreview};
export {MAX_COMMENTS};
export {AVATAR_COUNT};
export {MIN_LIKES};
export {MAX_LIKES};
export {MAX_COMMENT_ID};
export {PHOTOS_COUNT};
export {DESCRIPTIONS};
export {MESSAGES};
export {FIRST_NAMES};
export {body};
export {imgUploadForm};
export {sliderContainer};
export {SCALE_STEP};
export {CLASSES};