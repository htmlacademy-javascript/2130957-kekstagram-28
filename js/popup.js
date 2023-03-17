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
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const targetParent = '.picture';

const similarCommentFragment = document.createDocumentFragment();
const commentTemplate = socialComment.cloneNode(true);

const renderBigPicture = (array) => {
  const {url, description, likes, comments} = array;
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
  commentsCount.textContent = comments.length.toString();
  socialComments.innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__text').textContent = comment.message;
    similarCommentFragment.appendChild(commentElement);
  });
  const fillComments = () => socialComments.appendChild(similarCommentFragment);
  fillComments();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onPictureClick = (evt) => {
  const target = evt.target;
  const picture = target.closest(targetParent);
  if (!picture) {
    return;
  }
  evt.preventDefault();
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  const currentPost = picturePosts.find(({id}) => (id).toString() === picture.dataset.id);
  renderBigPicture(currentPost);
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
