const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const fillPictureContainer = (array, sortArray) => {
  const similarPictureFragment = document.createDocumentFragment();
  const filteredArray = sortArray(array);
  filteredArray
    .forEach(({id, url, likes, comments}) => {
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
