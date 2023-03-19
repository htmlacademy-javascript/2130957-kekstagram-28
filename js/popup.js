import {isEscapeKey} from './data.js';
import {picturePosts} from './miniature.js';

const body = document.querySelector('body');
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const cancel = document.querySelector('#picture-cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const targetParent = '.picture';

const commentTemplate = socialComment.cloneNode(true);
const similarCommentFragment = document.createDocumentFragment();

//Рендер большого изображения, описания, лайков, комментариев
const renderBigPicture = (array) => {
  similarCommentFragment.innerHTML = '';
  let loadingComments = 0;
  const {url, description, likes, comments} = array;
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
  commentsCount.textContent = comments.length.toString();
  const renderComments = () => {
    loadingComments += 5;
    socialComments.innerHTML = '';
    const commentsToShow = Math.min(comments.length, loadingComments);
    for (let i = 0; i < commentsToShow; i++) {
      const commentElement = commentTemplate.cloneNode(true);
      commentElement.querySelector('.social__picture').src = comments[i].avatar;
      commentElement.querySelector('.social__text').textContent = comments[i].message;
      socialCommentCount.textContent = `${commentsToShow} из ${comments.length} комментариев`;
      similarCommentFragment.appendChild(commentElement);
    }
    const fillComments = () => socialComments.appendChild(similarCommentFragment);
    fillComments();
    if (commentsToShow === comments.length) {
      commentsLoader.classList.add('hidden');
      commentsLoader.removeEventListener('click', renderComments);
    } else {
      commentsLoader.classList.remove('hidden');
      commentsLoader.addEventListener('click', renderComments);
    }
  };
  renderComments();
};

//Закрытие попапа кнопкой Esc
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

//Функция открытие попапа
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

//Событие по клику, запускает попап
pictures.addEventListener('click', onPictureClick);

//Функция закрытия попапа
function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

//Событие по клику, закрывает попап
cancel.addEventListener('click', () => {
  closeBigPicture();
});
