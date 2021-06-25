
const getRandomInteger = function(min, max) {
  if (min >= 0 && min < max) {
    let result = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(result);
  }
  console.log('Диапазон значений указан неправильно');
};

console.log(getRandomInteger(12, 99));

// Источник формулы для расчета переменной result: https://learn.javascript.ru/task/random-int-min-max


const getRandomFloat = function(min, max, numberDecimals) {
  if (min >= 0 && min < max) {
    let result = Math.random() * (max - min) + min;
    result = parseFloat(result.toFixed(numberDecimals));
    return result;
  }
  console.log('Диапазон значений указан неправильно');
};

console.log(getRandomFloat(1.11, 1.12, 4));
