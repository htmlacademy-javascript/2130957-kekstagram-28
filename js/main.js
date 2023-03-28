import './miniature.js';
import './popup.js';
import './user-modal.js';
import './user-form.js';
import './upload-file.js';
import {getData} from './api.js';
import {fillPictureContainer} from './miniature.js';
import {getPictureClick} from './popup.js';
import {showAlert} from './data.js';
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
