import {createRandomIdFromRangeGenerator} from './unique-random-generator.js';
import {getRandomArrayElement} from './random-arrow-element.js';
import {getRandomInteger} from './random-integer.js';
import {MAX_COMMENTS} from './consts.js';
import {AVATAR_COUNT} from './consts.js';
import {MIN_LIKES} from './consts.js';
import {MAX_LIKES} from './consts.js';
import {MAX_COMMENT_ID} from './consts.js';
import {PHOTOS_COUNT} from './consts.js';
import {DESCRIPTIONS} from './consts.js';
import {MESSAGES} from './consts.js';
import {FIRST_NAMES} from './consts.js';

const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generateUrl = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const generateLikes = createRandomIdFromRangeGenerator(MIN_LIKES, MAX_LIKES);
const generateCommentId = createRandomIdFromRangeGenerator(1, MAX_COMMENT_ID);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1,AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(FIRST_NAMES)
});

const createPicturePost = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrl()}.jpg`,
  likes: generateLikes(),
  description: getRandomArrayElement(DESCRIPTIONS),
  comments: Array.from({length: getRandomInteger(1,MAX_COMMENTS)}, createComment)
});

const createPicturePosts = () => Array.from({length: PHOTOS_COUNT}, createPicturePost);

export {createPicturePosts};
