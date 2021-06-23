//Arrays explored
//odd numbers in the array with iife
console.log("odd numbers in the array with iife");
(() => {
  let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let sorted = [];
  numbers.forEach((x) => {
    if (x % 2 != 0) sorted.push(x);
  });
  console.log(sorted);
})();
//annonymous function odd numbers in the array
console.log("annonymous function odd numbers in the array");
let oddNumbers = () => {
  let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let sorted = [];
  numbers.forEach((x) => {
    if (x % 2 != 0) sorted.push(x);
  });
  console.log(sorted);
};
oddNumbers();
//Title Case in array with iife
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

(function () {
  let strings = [
    "life is a state of excitement",
    "IT IS BEAUTIFUL",
    "nEVER iS iT iDENTICAL tO aNYONE eLSES!",
  ];
  strings.forEach(function (string, index) {
    this[index] = string.toProperCase();
  }, strings);
  console.log(strings);
})();
//Title Case in array with annonymous function
let titleTheStrings = () => {
  let strings = [
    "life is a state of excitement",
    "IT IS BEAUTIFUL",
    "nEVER iS iT iDENTICAL tO aNYONE eLSES!",
  ];
  strings.forEach(function (string, index) {
    this[index] = string.toProperCase();
  }, strings);
  console.log(strings);
};
titleTheStrings();
//sum of all numbers in an array
//using iife
(() => {
  let numerals = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14];
  let sum = 0;
  numerals.forEach((element) => (sum += element));
  console.log(sum);
})();
//using annonymous function
let arraySum = () => {
  let numerals = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14];
  let sum = 0;
  numerals.forEach((element) => (sum += element));
  console.log(sum);
};
arraySum();
//PrimeNumbers
//Function to check if the given number is prime or not
function checkPrime(number) {
  //mathematicians ignore 1 as a prime number
  if (number <= 1) {
    return false;
  } else {
    /*check if it has factors other than one and itself, 
    factors will be smaller than the given number */
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    //if no factors yet then that number is sure prime.
    return true;
  }
}
//primes using iife
(() => {
  let numerals = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ];
  let primes = [];
  //using Conditional (ternary) operator
  numerals.forEach((element) =>
    checkPrime(element) ? primes.push(element) : {}
  );
  console.log(primes);
})();
//primes using annonymous function
let primeNumbers = () => {
  let numerals = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ];
  let primes = [];
  //using straight forward arrow function in forEach
  numerals.forEach((element) => {
    if (checkPrime(element) == true) primes.push(element);
  });
  console.log(primes);
};
primeNumbers();
//palindromes in an array
//palindromes using iife
(() => {
  let words = [
    "tamil",
    "malayalam",
    "tenet",
    "pop",
    "kayak",
    "tattarrattat",
    "Wassamassaw",
    "radar",
    "level",
    "civic",
    "enola alone",
    "emily",
    "jack",
  ];
  let palindromes = [];
  words.forEach((element) =>
    element.split("").reverse().join("") === element
      ? palindromes.push(element)
      : {}
  );
  console.log(palindromes);
})();
//using anonymous function
//string reversing custom function
function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
var palindromeArray = () => {
  let words = [
    "tamil",
    "malayalam",
    "tenet",
    "pop",
    "kayak",
    "tattarrattat",
    "Wassamassaw",
    "radar",
    "level",
    "civic",
    "enola alone",
    "emily",
    "jack",
  ];
  let palindromes = [];
  words.forEach((element) =>
    reverseString(element) === element ? palindromes.push(element) : {}
  );
  console.log(palindromes);
};
palindromeArray();
//median of 2 arrays of same size
//median of 2 arrays using iife
(() => {
  let a = [1, 2, 3, 4, 5];
  let b = [6, 7, 8, 9, 10];
  let c = [...a, ...b];
  let sorted = c.slice().sort((x, y) => {
    return x - y;
  });
  if (sorted.length % 2 === 0) {
    let first = sorted[sorted.length / 2 - 1];
    let second = sorted[sorted.length / 2];
    let median = Math.floor((first + second) / 2);
    console.log(median);
  } else {
    let mid = Math.floor(sorted.length / 2);
    console.log(sorted[mid]);
  }
})();
//using anonymous function the median of 2 arrays
let findMedian = (arr = []) => {
  let sorted = arr.slice().sort((x, y) => {
    return x - y;
  });
  if (sorted.length % 2 === 0) {
    let first = sorted[sorted.length / 2 - 1];
    let second = sorted[sorted.length / 2];
    let median = Math.floor((first + second) / 2);
    return median;
  } else {
    let mid = Math.floor(sorted.length / 2);
    return sorted[mid];
  }
};
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
let c = [...a, ...b];
console.log(findMedian(c));
//remove duplicates in an array
//using iife removing duplicates in an array
(() => {
  let elements = [
    "flourine",
    "chlorine",
    "iodine",
    "bromine",
    "astatine",
    "tennessine",
    "chlorine",
    "iodine",
    "bromine",
  ];
  let uniqueElements = elements.filter((element, index) => {
    return elements.indexOf(element) === index;
  });
  console.log(uniqueElements);
})();
//using anonymous function removing duplicates in an array
let uniqueArray = function () {
  let elements = [
    "flourine",
    "chlorine",
    "iodine",
    "bromine",
    "astatine",
    "tennessine",
    "chlorine",
    "iodine",
    "bromine",
  ];
  let halogens = [];
  elements.forEach((element, index) => {
    if (elements.indexOf(element) === index) halogens.push(element);
  });
  console.log(halogens);
};
uniqueArray();
//rotate an array k times
//rotating arrays using iife
(() => {
  let arr = [
    "apple",
    "banana",
    "coconut",
    "dates",
    "elderberry",
    "fig",
    "grapes",
  ];
  let k = 4;
  if (!arr.length) console.log(arr);
  let index = 0;
  while (k >= ++index) {
    arr.unshift(arr.pop());
  }
  console.log(arr);
})();
//annonymous function to rotate an array k times
let arrayRotation = function (arr, k) {
  if (!arr.length) return arr;
  let index = 0;
  while (k >= ++index) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(  arrayRotation(['abbas','babas','cabanas','dhabas','earpods'], 3));
