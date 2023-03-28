import './upload-file.js';
import {getData} from './api.js';
import {fillPictureContainer} from './miniature.js';
import {getPictureClick} from './popup.js';
import {showAlert} from './util.js';
import {showSuccess} from './success.js';
import {setUserFormSubmit} from './user-form.js';
getData()
  .then((posts) => {
    fillPictureContainer(posts);
    getPictureClick(posts);
  })
  .catch(
    (err) => {
      showAlert(err);
    }
  );

setUserFormSubmit(showSuccess);
