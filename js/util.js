import {ALERT_SHOW_TIME, body} from './consts.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const alertFragment = document.createDocumentFragment();
const alertTemplate = document.querySelector('#error-server').content;
const showAlert = () => {
  const alertMessage = alertTemplate.cloneNode(true);
  alertFragment.appendChild(alertMessage);
  body.appendChild(alertFragment);

  setTimeout(() => {
    const alertContainer = document.querySelector('.error-server');
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey};
export {showAlert};
