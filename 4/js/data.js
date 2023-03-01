import {createRandomIdFromRangeGenerator} from './unique-random-generator.js';
import {getRandomArrayElement} from './random-arrow-element.js';
import {getRandomNumber} from './random-number.js';

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
  'Быт в деревне'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
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
const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generateUrl = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generateLikes = createRandomIdFromRangeGenerator(15, 200);
const generateCommentId = createRandomIdFromRangeGenerator(1, 200);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomNumber(5) + 1}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(FIRST_NAMES)
});

const createWizard = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrl()}.jpg`,
  likes: generateLikes(),
  description: getRandomArrayElement(DESCRIPTIONS),
  comments: Array.from({length: getRandomNumber(1) + 1}, createComment)
});

const similarWizards = Array.from({length: PHOTOS_COUNT}, createWizard);

export {similarWizards};
