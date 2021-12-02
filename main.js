"use strict";

/*
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
*/

function maxProfit(prices) {
  const profit = 0;
  let buyPrice = 0;
  let sellPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < i.length; j++)
      //   // if (buyPrice > prices[i]) {
      //   //   buyPrice = prices[i];
      //   //   prices[i] = 0;
      //   // } else {
      //   //   profit = Math.max(prices[i] - buyPrice, profit);
      //   // }
      //   for (let i = 0; i < prices.length; i++) {
      //     if (sellPrice < prices[i]) {
      //       sellPrice = prices[i];
      //       prices[i] = 0;
      //     } else {
      //       profit = Math.max(prices[i] - sellPrice, profit);
      //     }
      // }
      return true;
  }
}
exports.maxProfit = maxProfit;
