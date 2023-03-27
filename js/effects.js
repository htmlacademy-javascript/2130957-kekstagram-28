import {imgUploadForm} from './consts.js';
import {sliderContainer} from './consts.js';
import {EFFECTS} from './consts.js';
import {CLASSES} from './consts.js';
import {imgUploadPreview} from './consts.js';

const effectLevelValue = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');

sliderContainer.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 0,
  },
  start: 0,
  step: 0,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

//Фукнция, переключающая слайдер в зависимости от эффекта
const switchSlider = (array) => {
  const {min, max, step} = array;
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: max,
    step: step
  });
};

//Функция, удаляющая классы для изображения
const removeClasses = () => {
  const currentClass = CLASSES.find((imgClass) => imgClass === imgUploadPreview.classList.toString());
  imgUploadPreview.classList.remove(currentClass);
};

//Функция, меняющая эффекты
const changeEffect = (effect) => {
  sliderElement.noUiSlider.on('update', () => {
    const {style, unit, value} = effect;
    const currentValue = sliderElement.noUiSlider.get();
    effectLevelValue.value = currentValue;
    removeClasses();
    if (effect.value !== 'none') {
      sliderContainer.classList.remove('hidden');
      imgUploadPreview.style.filter = `${style}(${currentValue}${unit})`;
      imgUploadPreview.classList.add(`effects__preview--${value}`);
    } else {
      sliderContainer.classList.add('hidden');
      imgUploadPreview.classList.add(`effects__preview--${value}`);
      imgUploadPreview.style.filter = 'none';
    }
  });
};

//Функция, подбирающая эффект из массива в зависимости от выбранного радио инпута
const onEffectChange = (evt) => {
  const target = evt.target;
  const effectParent = target.closest('.effects__item');
  if (!effectParent) {
    return;
  }
  const effect = effectParent.querySelector('.effects__radio');
  const currentEffect = EFFECTS.find(({value}) => (value) === effect.value);
  switchSlider(currentEffect);
  changeEffect(currentEffect);
};

imgUploadForm.addEventListener('change', onEffectChange);

//Функция, сбрасывающая эффект и значение в инпуте
const resetEffect = () => {
  imgUploadPreview.style.filter = 'none';
  sliderContainer.classList.add('hidden');
  effectLevelValue.value = 0;
  removeClasses();
  imgUploadPreview.classList.add('effects__preview--none');
};

export {resetEffect};
