import {fillPictureContainer} from './miniature.js';
import {MAX_RANDOM_POSTS, RERENDER_DELAY} from './consts.js';
import {debounce} from './util.js';

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
  imgFiltersButton.forEach((element) => element.classList.remove('img-filters__button--active'));
  button.classList.add('img-filters__button--active');
};

const removePictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const setFilterClick = (array) => {
  imgFiltersForm.addEventListener('click', onFilterClick);
  function onFilterClick (evt) {
    imgFiltersForm.removeEventListener('click', onFilterClick);
    const target = evt.target.closest('.img-filters__button');
    if (!target) {
      return;
    }
    clearFilter(target);
    const {id} = target;
    const renderPosts = (posts) => {
      removePictures();
      switch (id) {
        case 'filter-default':
          fillPictureContainer(posts, sortByDefault);
          break;
        case 'filter-discussed':
          fillPictureContainer(posts, sortByComments);
          break;
        case 'filter-random':
          fillPictureContainer(posts, sortByRandom);
          break;
        default:
          fillPictureContainer(posts, sortByDefault);
      }
      imgFiltersForm.addEventListener('click', onFilterClick);
    };
    const debouncedRenderPosts = debounce(() => renderPosts(array), RERENDER_DELAY);
    debouncedRenderPosts();
  }
};

export {setFilterClick, sortByDefault, showImgFilter};
