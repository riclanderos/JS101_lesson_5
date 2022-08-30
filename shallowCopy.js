const { Call, YoutubeSearchedFor } = require("@material-ui/icons");

// for loop transformation
let numbers = [1, 2, 3, 4, 5];
// let transformedNumbers = [];

// for (let index = 0; index < numbers.length; index++) {
//   let currentNum = numbers[index];
//   let squaredNum = currentNum * currentNum;

//   transformedNumbers.push(squaredNum);
// }



// let transformedNumbers = numbers.map(currentNum => currentNum * currentNum);
// console.log(transformedNumbers);

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});
console.log(keys);
