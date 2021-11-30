"use strict";

function isPrime(n) {
  if (n === 1 || n === 0) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

exports.isPrime = isPrime;

function getPrimeNumbers(n) {
  const primeNumbers = [];
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

exports.getPrimeNumbers = getPrimeNumbers;
