'use strict';

/********sum add numbers********/
// function solution(number) {
//   return number
//     .filter((el) => el % 3 === 0 || el % 5 === 0)
//     .reduce((acc, el) => acc + el);
// }

// const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(number)); //23
/********telephone number********/
//option -1
// function createPhoneNumber(numbers) {
//   const firstPartNumbers = `${numbers[0]}${numbers[1]}${numbers[2]}`;
//   const secondPartNumbers = `${numbers[3]}${numbers[4]}${numbers[5]}`;
//   const thirdPartNumbers = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

//   return `(${firstPartNumbers}) ${secondPartNumbers}-${thirdPartNumbers}`;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"

//option -2
// function createPhoneNumber(numbers) {
//   const firstPartNumbers = numbers.slice(0, 3).join('');
//   const secondPartNumbers = numbers.slice(3, 6).join('');
//   const thirdPartNumbers = numbers.slice(6, 10).join('');

//   return `(${firstPartNumbers}) ${secondPartNumbers}-${thirdPartNumbers}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"

//option -3
// function createPhoneNumber(numbers) {
//   let format = '(xxx) xxx-xxxx';

//   for (let i = 0; i < numbers.length; i++) {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"

/********arr index********/
//option - 1
// function findEvenIndex(arr) {
//   const findNumberIndex = arr.slice(-3).reduce((acc, el) => acc + el);
//   const findInd = arr.findIndex((el) => el === findNumberIndex);

//   return findInd;
// }
// console.log(findEvenIndex([1, 2, 3, 4, 1, 1, 1])); //2 (index)
// console.log(findEvenIndex([1, 2, 2, 4, 1, 1, 1])); //-1

/*************/
//option - 2
// function findEvenIndex(arr) {
//   let numberIndex = 0;
//   for (let i = arr.length - 3; i < arr.length; i++) {
//     numberIndex += arr[i];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === numberIndex) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findEvenIndex([1, 2, 3, 4, 1, 1, 1])); //2 (index)
// console.log(findEvenIndex([1, 2, 2, 4, 1, 1, 1])); //-1

/********sum of left & right part********/
// function findEvenIndex(arr) {
//   let sumLeft = 0;
//   let sumRight = arr.reduce((acc, val) => acc + val, 0); //16

//   for (let i = 0; i < arr.length; i++) {
//     sumRight -= arr[i];

//     if (sumLeft === sumRight) {
//       console.log(sumLeft === sumRight);
//       console.log(sumLeft, 'l', sumRight, 'r');
//       return i;
//     }

//     sumLeft += arr[i];
//   }

//   return -1;
// }
// console.log('x1', findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log('***');
// console.log('x2', findEvenIndex([1, 100, 50, -51, 1, 1])); //1
// console.log('***');
// console.log('x3', findEvenIndex([1, 2, 3, 4, 5, 6])); //-1
// console.log('***');
// console.log('x4', findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3

/********max el and str********/

// function longestConsec(strarr, k) {
//   return [...strarr]
//     .sort((a, b) => b.length - a.length)
//     .slice(0, k)
//     .join('');
// }

// console.log(longestConsec(['123', '12', '1234', '12345'], 2));
// console.log(longestConsec(['123', '12', '1234', '12345'], 1));
// console.log(longestConsec(['123', '12', '1234', '12345'], 0));

// console.log(longestConsec(['aaa', 'b', 'ccccc', 'dddd'], 3));

/********sum of left & right part********/
//option - 1
// function getSrt(str) {
//   let resStr = '';

//   if (str.length % 2 !== 0) {
//     resStr = str + '_';
//   } else {
//     resStr = str;
//   }

//   return resStr.match(/.{1,2}/g);
// }

// console.log(getSrt('abcdf')); // вивід: "abcdf"
// console.log(getSrt('abcdfg')); // вивід: "abcdf"

//option - 2
// function getSrt(str) {
//   let resStr = '';
//   const resArr = [];

//   if (str.length % 2 !== 0) {
//     resStr = str + '_';
//   } else {
//     resStr = str;
//   }

//   for (let i = 0; i < resStr.length; i += 2) {
//     resArr.push(resStr.slice(i, i + 2));
//   }
//   return resArr;
// }

// console.log(getSrt('abcdf'));
// console.log(getSrt('abcdfg'));

//option - 3

// function getSrt(str) {
//   let resStr = '';

//   if (str.length % 2 !== 0) {
//     resStr = str + '_';
//   } else {
//     resStr = str;
//   }

//   const resArr = [...resStr]
//     .filter((_, i) => i % 2 === 0)
//     .map((cur, i) => cur + (resStr[i * 2 + 1] || ''));

//   return resArr;
// }

// console.log(getSrt('abcdf')); // ['ab', 'cd', 'f_']
// console.log(getSrt('abcdfg')); // ['ab', 'cd', 'fg']

/********sum of left & right part********/
//option 1
// function solution(string) {
//   return string.split(/(?=[A-Z])/).join(' ');
// }

//option 2
// function solution(string) {
//   return [...string].reduce((acc, el) => {
//     console.log('acc:', acc);
//     console.log('el:', el);
//     if (el === el.toUpperCase()) {
//       acc += ' ';
//     }
//     acc += el;
//     return acc;
//   }, '');
// }

//option 3
// const solution = (string) =>
//   [...string].map((el) => (el === el.toUpperCase() ? ` ${el}` : el)).join('');

// console.log(solution('singerIvoBobul'));

/********unique********/
// function remove(string) {
//   const x = string.split(' ');
//   console.log(x);

//   const y = x[0] === '!Hi' && x[1] === '!Hi' && x[2] === '!Hi';
//   if (x.length <= 2 || (x[0] === x[1] && x[0] === x[2])) {
//     return 'x';
//   }

//   // console.log(x.length);
//   // console.log([x[0]], [x[1]], [x[2]]);

//   if (x[0] !== x[1] && x[0] !== x[2]) {
//     return x[0];
//   }
//   if (x[1] !== x[0] && x[1] !== x[2]) {
//     return x[1];
//   }
//   if (x[2] !== x[0] && x[2] !== x[1]) {
//     return x[2];
//   }
// }

// const remove = (string) => {
//   return string
//     .split(' ')
//     .filter((el) => el !== '!Hi' && el !== 'Hi!')
//     .join('');
// };

// const remove = (string) => {
//   return string
//     .split(' ')
//     .filter((el) => !el.includes('!') || el.split('!').length !== 2);
// };

// console.log(remove('Hi!')); //=== '';
// console.log(remove('Hi! Hi!')); //=== '';
// console.log(remove('Hi! Hi! Hi!')); //=== '';
// console.log(remove('Hi Hi! Hi!')); //=== 'Hi';
// console.log(remove('Hi! !Hi Hi!')); //=== '';
// console.log(remove('Hi! Hi!! Hi!')); //=== 'Hi!!';+
// console.log(remove('Hi! !Hi! Hi!')); //=== '!Hi!';+

// remove('Hi!'); //=== '';
// remove('Hi! Hi!'); //=== '';
// remove('Hi! Hi! Hi!'); //=== '';
// remove('Hi Hi! Hi!'); //=== 'Hi';
// remove('Hi! !Hi Hi!'); //=== '';
// remove('Hi! Hi!! Hi!'); //=== 'Hi!!';+
// remove('Hi! !Hi! Hi!'); //=== '!Hi!';+
// remove('Hi! !Hi!! Hi!'); //=== '!Hi!';+

/********even_odd********/
// const evenOrOdd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');

// console.log(evenOrOdd(2));
// console.log(evenOrOdd(7));

/********even_odd********/
// const getSumStep = (numb) => {
//   return numb
//     .toString()
//     .split('')
//     .reduce((acc, el) => acc + Number(el * el), 0);
// };

// console.log(getSumStep(123)); //14
// console.log(getSumStep(121));

//option1
// const getSumStep = (numb) => {
//   const arrWithNumber = numb.toString().split('').map(Number);
//   console.log(arrWithNumber);
//   let sum = 0;

//   for (let i = 0; i <= arrWithNumber.length; i++) {
//     console.log('i', i);
//     console.log('arrWithNumber', arrWithNumber[i]);
//     sum += arrWithNumber[i] * i + 2;
//   }
//   return sum;
// };

// console.log(getSumStep(321));

// const getSumStep = (numb) => {
//   const arrWithNumber = numb.toString().split('').map(Number);
//   let sum = 0;

//   for (let i = 0; i < arrWithNumber.length; i++) {
//     sum += arrWithNumber[i] * (i + 1);
//   }

//   return sum;
// };

// console.log(getSumStep(123)); // 14
// console.log(getSumStep(121)); // 8

/********get_numb_diapazone********/
//option 1
// function sumDigPow(a, b) {
//   let result = [];
//   for (let i = a; i <= b; i++) {
//     const fromNumbToString = i.toString();
//     let getSum = 0;
//     for (let num = 0; num < fromNumbToString.length; num++) {
//       getSum += Math.pow(Number(fromNumbToString[num]), num + 1);
//     }

//     if (getSum === i) {
//       result.push(getSum);
//     }
//   }
//   return result;
// }

//option 2
// function sumDigPow(a, b) {
//   let result = [];
//   for (let i = a; i <= b; i++) {
//     const fromNumbToString = i.toString();
//     const getNumbers = [...fromNumbToString].reduce(
//       (acc, el, index) => acc + Number(el) ** (index + 1),
//       0
//     );
//     if (getNumbers === i) {
//       result.push(getNumbers);
//     }
//   }

//   return result;
// }

//option 3
// function sumDigPow(a, b) {

// return [...Array(b - a + 1).keys()];
// .map((x) => x + a)
// .filter((x) => {
//   return (
//     x ===
//     [...String(x)].reduce(
//       (acc, cur, idx) => acc + Math.pow(cur, idx + 1),
//       0
//     )
//   );
// });
// }

// console.log(sumDigPow(91, 92));
// sumDigPow(91, 92);

// console.log(sumDigPow(90, 150)); // [135]
// console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

function sumDigPow(a, b) {
  const numbers = Array.from({ length: b - a + 1 }, (_, i) => a + i);
  console.log(numbers); // [91, 92, 93, 94, 95]
}

sumDigPow(91, 95);
