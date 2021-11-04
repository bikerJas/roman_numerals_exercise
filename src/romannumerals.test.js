const getNumericValueFromRomanNumerals = require('./romannumerals');

test("checks that I returns 1", () => {
    const input = "I";
    const output = getNumericValueFromRomanNumerals(input);
  expect(output).toBe(1);
});

test("checks that II returns 2", () => {
  const input = "II";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(2);
});

test("checks that IV returns 4", () => {
  const input = "IV";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(4);
});

test("checks that IX returns 9", () => {
  const input = "IX";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(9);
});

test("checks that IIII returns null", () => {
  const input = "IIII";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(null);
});


test("checks that XX returns 20", () => {
  const input = "XX";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(20);
});

test("checks that XL returns 40", () => {
  const input = "XL";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(40);
});

test("checks that LL returns null", () => {
  const input = "LL";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(null);
});

test("checks that CD returns 400", () => {
  const input = "CD";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(400);
});

test("checks that DD returns null", () => {
  const input = "DD";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(null);
});

test("checks that MM returns 2000", () => {
  const input = "MM";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(2000);
});

test("checks that MCMLXXXVII returns 1987", () => {
  const input = "MCMLXXXVII";
  const output = getNumericValueFromRomanNumerals(input);
expect(output).toBe(1987);
});