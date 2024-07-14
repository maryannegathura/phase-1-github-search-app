// test-helpers.test.js

const { multiply } = require("./helpers");

describe("multiply function", () => {
  it("multiplies two positive numbers correctly", () => {
    expect(multiply(3, 4)).toBe(12); // 3 * 4 should be 12
  });

  it("multiplies a positive and a negative number correctly", () => {
    expect(multiply(5, -2)).toBe(-10); // 5 * (-2) should be -10
  });

  it("multiplies two negative numbers correctly", () => {
    expect(multiply(-4, -3)).toBe(12); // (-4) * (-3) should be 12
  });

  it("multiplies by zero correctly", () => {
    expect(multiply(6, 0)).toBe(0); // 6 * 0 should be 0
  });
});
