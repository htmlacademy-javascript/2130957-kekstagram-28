import {fillPictureContainer} from './miniature.js';
import {MAX_RANDOM_POSTS} from './consts.js';

const imgFilters = document.querySelector('.img-filters');
const imgFiltersButton = document.querySelectorAll('.img-filters__button');
const imgFiltersForm = document.querySelector('.img-filters__form');

const sortByRandom = (array) => {
  const comparePostsRandom = () => Math.random() - 0.5;
  return array
    .slice()
    .sort(comparePostsRandom)
    .slice(0,MAX_RANDOM_POSTS);
};

const sortByComments = (array) => {
  const comparePostsComments = (postA, postB) => postB.comments.length - postA.comments.length;
  return array
    .slice()
    .sort(comparePostsComments);
};
const sortByDefault = (array) => {
  const comparePostsDefault = (postA, postB) => postA.id - postB.id;
  return array
    .slice()
    .sort(comparePostsDefault);
};

const showImgFilter = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

const clearFilter = (button) => {
  const pictures = document.querySelectorAll('.picture');
  imgFiltersButton.forEach((element) => element.classList.remove('img-filters__button--active'));
  button.classList.add('img-filters__button--active');
  pictures.forEach((picture) => picture.remove());
};

const renderPostsByComments = (array) => {
  imgFiltersForm.addEventListener('click', (evt) => {
    if (!evt.target.matches('.img-filters__button')) {
      return;
    }
    clearFilter(evt.target);
    const {id} = evt.target;
    switch (id) {
      case 'filter-default':
        fillPictureContainer(array, sortByDefault);
        break;
      case 'filter-discussed':
        fillPictureContainer(array, sortByComments);
        break;
      case 'filter-random':
        fillPictureContainer(array, sortByRandom);
        break;
      default:
        fillPictureContainer(array, sortByDefault);
    }
  });
};

export {sortByDefault, showImgFilter, renderPostsByComments};
