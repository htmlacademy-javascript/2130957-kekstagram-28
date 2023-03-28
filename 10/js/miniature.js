const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const similarPictureFragment = document.createDocumentFragment();

const fillPictureContainer = (array) => {
  array.forEach((picture) => {
    const {id, url, likes, comments} = picture;
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture').dataset.id = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    similarPictureFragment.appendChild(pictureElement);
  });
  pictureContainer.appendChild(similarPictureFragment);
};

export {fillPictureContainer};
