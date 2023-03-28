import {ALERT_SHOW_TIME} from './consts.js';


const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '15px';
  alertContainer.style.fontSize = '24px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.textShadow = '1px 0 0 #fff';
  alertContainer.style.backgroundColor = '#f96464';
  alertContainer.textContent = 'Не удалось загрузить данные. Попробуйте обновить страницу';
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey};
export {showAlert};
