
const getRandomInteger = function(min, max) {
  if (min >= 0 && min < max) {
    const result = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(result);
  }
  console.log('Диапазон значений указан неправильно');
};

console.log(getRandomInteger(12, 99));

// Источник формулы для расчета переменной result: https://learn.javascript.ru/task/random-int-min-max

const getRandomFloatNumber = function(min, max, numberDecimals) {
  if (min >= 0 && min < max) {
    let result = Math.random() * (max - min) + min;
    result = parseFloat(result.toFixed(numberDecimals));
    return result;
  }
  console.log('Диапазон значений указан неправильно');
};

console.log(getRandomFloatNumber(1.11, 1.12, 4));

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomNonrepeatingElement = (elements) => {
  const randomInteger = getRandomInteger(0, elements.length - 1);
  return elements.splice(randomInteger, 1).join();
};

const getRandomLengthArray = (elements) => {
  const maxLength = elements.length;
  const randomLength = getRandomInteger(1, maxLength);
  const randomArray = [];

  while (randomArray.length < randomLength) {
    const elementsIndex = getRandomInteger(0, maxLength - 1);
    const element = elements[elementsIndex];

    if (!randomArray.includes(element)) {
      randomArray.push(element);
    }
  }
  return randomArray;
};

export {getRandomInteger, getRandomFloatNumber, getRandomArrayElement, getRandomNonrepeatingElement, getRandomLengthArray};