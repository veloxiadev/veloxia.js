import * as v from "../src";

describe("v as namespace", () => {
  it("can access functions", () => {
    expect(v.date()).toBeDefined();
    expect(v.random(0, 1)).toBeDefined();
  });
});
