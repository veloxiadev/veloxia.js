import * as v from "../src/index";

describe("hello world function", () => {
  it("numberFormat", () => {
    expect(v.numberFormat(259000)).toBe("259 000");
    expect(v.numberFormat(2259000.93)).toBe("2 259 000");
    expect(v.numberFormat(259000.97, 2, ",", " ")).toBe("259 000,97");
  });
  it("booleanToString", () => {
    expect(v.booleanToString(true, "Ja", "Nej")).toBe("Ja");
    expect(v.booleanToString(false, "Ja", "Nej")).toBe("Nej");
    expect(v.booleanToString(1)).toBe("Ja");
    expect(v.booleanToString(0)).toBe("Nej");
  });

  it("sv_SE.dateFormat", () => {
    expect(v.sv_SE.MONTHS[1]).toBe("januari");
    expect(
      v.sv_SE.dateFormat(
        new Date(1000 * 3600 * 24 * 365 * 50 + 1000 * 3600 * 24 * 175)
      )
    ).toBe("2020-06-12");
    expect(
      v.sv_SE.dateFormat(
        new Date(1000 * 3600 * 24 * 365 * 50 + 1000 * 3600 * 24 * 170)
      )
    ).toBe("2020-06-07");
    expect(
      v.sv_SE.dateFormat(
        new Date(1000 * 3600 * 24 * 365 * 50 + 1000 * 3600 * 24 * 350)
      )
    ).toBe("2020-12-04");
  });
});
