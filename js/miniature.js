import {createPicturePosts} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const picturePosts = createPicturePosts();
const similarPictureFragment = document.createDocumentFragment();
picturePosts.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  similarPictureFragment.appendChild(pictureElement);
});
const fillPictureContainer = () => pictureContainer.appendChild(similarPictureFragment);
export {fillPictureContainer};
