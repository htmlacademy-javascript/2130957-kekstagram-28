import {isEscapeKey} from './data.js';
import {picturePosts} from './miniature.js';

const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const cancel = document.querySelector('#picture-cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

socialCommentCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onPictureClick = (evt) => {
  const target = evt.target;
  const picture = target.closest('.picture');
  evt.preventDefault();
  if (picture) {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
    picturePosts.forEach((div) => {
      if (+picture.dataset.id === div.id) {
        bigPictureImg.src = div.url;
        bigPictureImg.alt = div.description;
        likesCount.textContent = div.likes;
        socialCaption.textContent = div.description;
      }
    });
  }
};

pictures.addEventListener('click', onPictureClick);

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

cancel.addEventListener('click', () => {
  closeBigPicture();
});
