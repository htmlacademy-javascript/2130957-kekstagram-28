import './upload-file.js';
import {getData} from './api.js';
import {fillPictureContainer} from './miniature.js';
import {sortByDefault, showImgFilter, setFilterClick} from './filter.js';
import {getPictureClick} from './popup.js';
import {showAlert} from './util.js';
import {showSuccess} from './success.js';
import {setUserFormSubmit} from './user-form.js';

getData()
  .then((posts) => {
    fillPictureContainer(posts, sortByDefault);
    getPictureClick(posts);
    showImgFilter();
    setFilterClick(posts);
  })
  .catch(
    (err) => {
      showAlert(err);
    }
  );

setUserFormSubmit(showSuccess);
