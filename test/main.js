var assert = require("assert");
var main = require("../main");

describe("main", function () {
  describe("isPrime", function () {
    it("should return true for a prime number", function () {
      const value = main.isPrime(97);
      assert.equal(value, true);
    });
    it("should return false for a non-prime number", function () {
      const value = main.isPrime(97);
      assert.equal(value, false);
    });
  });
});
