var assert = require("chai").assert;
var validateAccount = require("./luhn.js");

describe("Valid Account Number :", function() {
  it("should return true if a number is a valid number", function() {
    var number = 49927398716;
    var result = validateAccount(number);
    assert.isTrue(result);
  });

  it("should return True if a word is a valid number", function() {
    var number = 49927398717;
    assert.isTrue(validateAccount(number));
  });

  it("should return false if a word is NOT a valid number", function() {
    var number = 1637493826272;
    assert.isFalse(validateAccount(number));
  });

  it("should return false if a word is NOT a valid number", function() {
    var number = 193846282023;
    assert.isFalse(validateAccount(number));
  });
});
