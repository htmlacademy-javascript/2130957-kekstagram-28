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
import {ALERT_SHOW_TIME} from './consts.js';

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
const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '15px';
  alertContainer.style.fontSize = '24px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.textShadow = '1px 0 0 #fff';
  alertContainer.style.backgroundColor = '#f96464';

  alertContainer.textContent = 'Не удалось загрузить данные. Попробуйте обновить страницу';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {createPicturePosts};
export {isEscapeKey};
export {showAlert};
