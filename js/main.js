let randomInteger = function(min, max) {
  let result = min - 0.5 + Math.random() * (max - min + 1);
  if (min >= 0 && min < max) {
  return Math.round(result);
  }
 console.log('Диапазон значений указан неправильно');
  }

console.log(randomInteger(12, 99));

// Источник формулы для расчета переменной result: https://learn.javascript.ru/task/random-int-min-max


let randomFloatNumber = function(min, max, numberDecimals) {
  let result = min - 0.5 + Math.random() * (max - min + 1);
  result = parseFloat(result.toFixed(numberDecimals));
  if (min >= 0 && min < max) {
  return result;
  }
 console.log('Диапазон значений указан неправильно');
  }

console.log(randomFloatNumber(1, 500, 5));
