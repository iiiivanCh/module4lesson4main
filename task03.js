'use strict'

const calculate = (totalPrice, mushProduct, promoCode) => {

  let discount01 = 0;
  let discount02 = 0;

  if (mushProduct > 10) {
    discount01 = totalPrice * 0.03;
  }

  let sum = totalPrice - discount01;

  if (totalPrice > 30000) {
    discount02 = (totalPrice - 30000) * 0.15;
  }

  sum = sum - discount02;

  if (promoCode === 'METHED') {
    sum = sum * 0.9;
  }

  if (sum > 2000 && promoCode === 'G3H2Z1') {
    sum = sum - 500;
  }

  console.log(sum.toFixed(2));
}


calculate(20000, 15, 'G3H2Z1');