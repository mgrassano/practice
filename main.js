"use strict";

// prime number is greater than 1 w only 2 factors - themselves and 1
// a prime number cannot be divided by any other numbers without leaving a remainder
// ex. 13 has only itself and 1
// ex. 4 has itself, 2, and 1 NOT a prime number
// list of prime numbers to 100
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 0; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
}

exports.isPrime = isPrime;

function getPrimeNumbers(n) {
  const isPrime = [];
  for (let i = 0; i < n; i++) {
    isPrime.push(i);
  }
}
return isPrime;
