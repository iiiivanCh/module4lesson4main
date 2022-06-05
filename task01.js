"use strict"

function converter(evro) {
  const dollar = evro / 1.2;
  const ruble = dollar * 73;
  console.log('Стоимость покупки в рублях: ' + ruble);
};

converter(0);

const converterEvro = evro => {
  const ruble = evro / 1.2 * 73;
  console.log(`Стоимость покупки в рублях: ${ruble}`);
};

converterEvro(4);
