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

//   80.49, 30.2, 15.15, 10.9, 71.6, 8.46, 25.95, 50.25,
// i is the day we're on
// j is the day we're comparing it to

function maxProfit(prices) {
  let buyIndex = 0;
  let sellIndex = 0;
  let highestMargin = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < prices.length; j++) {
      const dayPrice = prices[i];
      const comparedPrice = prices[j];
      const difference = comparedPrice - dayPrice;
      const isDifferenceHigher = difference > highestMargin;

      if (i < j && isDifferenceHigher) {
        buyIndex = i;
        sellIndex = j;
        highestMargin = difference;
      }
    }
  }

  return [buyIndex, sellIndex];
}
exports.maxProfit = maxProfit;
