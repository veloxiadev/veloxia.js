import * as v from "../src/index";

describe("hello world function", () => {
  it("numberFormat", () => {
    expect(v.numberFormat(259000)).toBe("259 000");
    expect(v.numberFormat(2259000.93)).toBe("2 259 000");
    expect(v.numberFormat(259000.97, 2, ",", " ")).toBe("259 000,97");
  });
});
