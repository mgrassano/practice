var assert = require("assert");
var main = require("../main");

describe("main", function () {
  describe("isPrime", function () {
    it("should return true for a prime number", function () {
      const value = main.isPrime(5);
      assert.equal(value, true);
    });
    it("should return false for a non-prime number", function () {
      const value = main.isPrime(0);
      assert.equal(value, false);
    });
  });
  describe("getPrimeNumbers", function () {
    it("should return a list of prime numbers up to n", function () {
      const value = main.getPrimeNumbers(100);
      assert.deepStrictEqual(
        value,
        [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97,
        ]
      );
    });
  });
});
