import './upload-file.js';
import {getData} from './api.js';
import {fillPictureContainer} from './miniature.js';
import {sortByDefault, showImgFilter, renderPostsByComments} from './filter.js';
import {getPictureClick} from './popup.js';
import {showAlert, debounce} from './util.js';
import {showSuccess} from './success.js';
import {setUserFormSubmit} from './user-form.js';
import {RERENDER_DELAY} from './consts.js';

getData()
  .then((posts) => {
    fillPictureContainer(posts, sortByDefault);
    getPictureClick(posts);
    showImgFilter();
    renderPostsByComments(posts);
  })
  .catch(
    (err) => {
      showAlert(err);
    }
  );

setUserFormSubmit(showSuccess);
