import { random, randomInteger } from "../src";
import { randomString } from "../src";
describe("/random/string", () => {
  it("randomString() generates a string of the requested length ", () => {
    const str = randomString(10);
    expect(str.length).toBe(10);
    expect(str).toMatch(/^[\w\d]{10}$/);
  });
});

describe("/random/number", () => {
  it("v.random() generates random numbers that average around min + 0.5 x (max-min)", () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      const rand = random(10, 30);
      sum += rand;
      expect(rand).toBeLessThanOrEqual(30);
      expect(rand).toBeGreaterThanOrEqual(10);
    }
    // Should average around 20
    expect(sum / 1000).toBeGreaterThanOrEqual(18);
    expect(sum / 1000).toBeLessThanOrEqual(22);
  });

  it("randomInteger() generates random INTEGERS", () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      const rand = randomInteger(10, 30);
      sum += rand;
      expect(rand).toBeLessThanOrEqual(30);
      expect(rand).toBeGreaterThanOrEqual(10);
      expect(Math.round(rand)).toBe(rand);
    }
    // Should average around 20
    expect(sum / 1000).toBeGreaterThanOrEqual(18);
    expect(sum / 1000).toBeLessThanOrEqual(22);
  });
});
