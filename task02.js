'use strict'

const newStr = (str) => {
  let oneStr = str.charAt(0);
  oneStr = oneStr.toUpperCase();
  let newStr  = str.slice(1);
  newStr = newStr.toLowerCase();
  oneStr = oneStr.concat(newStr);
  console.log(oneStr);
};

newStr("привет Андрей");
newStr("главНОЕ ЧТОБЫ 23 косТЮмчик сидел!");
