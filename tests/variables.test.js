import { firstName, lastName, fullName, age, city, output } from "../src/index.js";

describe("Variables Assignment - Basics", () => {
  describe("String Variables", () => {
    test("firstName should be a non-empty string", () => {
      expect(typeof firstName).toBe("string");
      expect(firstName.length).toBeGreaterThan(0);
    });

    test("lastName should be a non-empty string", () => {
      expect(typeof lastName).toBe("string");
      expect(lastName.length).toBeGreaterThan(0);
    });

    test("city should be a non-empty string", () => {
      expect(typeof city).toBe("string");
      expect(city.length).toBeGreaterThan(0);
    });
  });

  describe("fullName Variable", () => {
    test("fullName should be a non-empty string", () => {
      expect(typeof fullName).toBe("string");
      expect(fullName.length).toBeGreaterThan(0);
    });

    test("fullName should contain firstName", () => {
      expect(fullName.includes(firstName)).toBe(true);
    });

    test("fullName should contain lastName", () => {
      expect(fullName.includes(lastName)).toBe(true);
    });

    test("fullName should have a space between firstName and lastName", () => {
      expect(fullName).toMatch(/\s/);
    });
  });

  describe("age Variable", () => {
    test("age should be a number", () => {
      expect(typeof age).toBe("number");
    });

    test("age should be greater than 0", () => {
      expect(age).toBeGreaterThan(0);
    });

    test("age should be less than or equal to 150", () => {
      expect(age).toBeLessThanOrEqual(150);
    });
  });

  describe("output Variable", () => {
    test("output should be a non-empty string", () => {
      expect(typeof output).toBe("string");
      expect(output.length).toBeGreaterThan(0);
    });

    test("output should contain fullName", () => {
      expect(output.includes(fullName)).toBe(true);
    });

    test("output should contain age", () => {
      expect(output.includes(age.toString())).toBe(true);
    });

    test("output should contain city", () => {
      expect(output.includes(city)).toBe(true);
    });

    test("output should start with 'My name is'", () => {
      expect(output.startsWith("My name is")).toBe(true);
    });

    test("output should end with a period", () => {
      expect(output.endsWith(".")).toBe(true);
    });
  });
});
