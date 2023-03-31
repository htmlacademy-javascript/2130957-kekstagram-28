import {imgUploadPreview, MIN_SCALE_STEP, SCALE_STEP, MAX_SCALE_STEP} from './consts.js';

const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');

let defaultControlValue = 100;
scaleControlValue.value = `${defaultControlValue.toString()}%`;

//Функция, вычисляющая масштаб изображения
const scaleImage = () => {
  scaleControlValue.value = `${defaultControlValue.toString()}%`;
  const transformValue = defaultControlValue / 100;
  imgUploadPreview.style.transform = `scale(${transformValue})`;
};
//Событие по клику, уменьшающее масштаб
scaleControlSmaller.addEventListener('click', () => {
  if (defaultControlValue > MIN_SCALE_STEP) {
    defaultControlValue -= SCALE_STEP;
    scaleImage();
  }
});

//Событие по клику, увеличивающее масштаб
scaleControlBigger.addEventListener('click', () => {
  if (defaultControlValue < MAX_SCALE_STEP) {
    defaultControlValue += SCALE_STEP;
    scaleImage();
  }
});

//Функция, обнуляющая масштаб до значения по умолчанию
const resetScale = () => {
  defaultControlValue = 100;
  scaleImage();
};

export {resetScale};
