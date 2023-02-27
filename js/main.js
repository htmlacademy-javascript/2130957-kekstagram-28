const PHOTOS_COUNT = 25;
const DESCRIPTION = [
  'Фотография на фоне гор',
  'Фотография на фоне моря',
  'Фотография в городе',
  'Селфи на фоне деревьев',
  'Кот сидит на балконе',
  'Группа людей в аудитории',
  'Фотография еды в кафе',
  'Неопознанный летающий объект',
  'Закат солнца на фоне реки',
  'Быт в деревне'
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const FIRST_NAME = [
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function getRandomNumber(maxValue) {
  return Math.floor(Math.random() * (maxValue + 1));
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generateUrl = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generateLikes = createRandomIdFromRangeGenerator(15, 200);
const generateCommentId = createRandomIdFromRangeGenerator(1, 200);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomNumber(5) + 1}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(FIRST_NAME)
});

const createWizard = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrl()}.jpg`,
  likes: generateLikes(),
  description: getRandomArrayElement(DESCRIPTION),
  comments: Array.from({length: getRandomNumber(1) + 1}, createComments)
});

const similarWizards = Array.from({length: PHOTOS_COUNT}, createWizard);

/* eslint-disable-next-line no-console */
console.log(similarWizards);
