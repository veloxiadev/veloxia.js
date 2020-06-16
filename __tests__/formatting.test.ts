import {
  numberFormat,
  booleanToString,
  stringChunk,
  arrayChunk,
} from "../src/index";
describe("/formatting/boolean", () => {
  it("booleanToString() converts truthy and falsy values to yes/no", () => {
    expect(booleanToString(true, "Ja", "Nej")).toBe("Ja");
    expect(booleanToString(false, "Ja", "Nej")).toBe("Nej");
    expect(booleanToString(1)).toBe("Ja");
    expect(booleanToString(0)).toBe("Nej");
  });
});

describe("/formatting/number", () => {
  it("numberFormat() converts numbers to pretty strings", () => {
    expect(numberFormat(259000)).toBe("259 000");
    expect(numberFormat(2259000.93)).toBe("2 259 000");
    expect(numberFormat(259000.97, 2, ",", " ")).toBe("259 000,97");
  });
  it("numberFormat() prepends 0:s when number of decimals exceed precision", () => {
    expect(numberFormat(2500.23, 1, ",", " ")).toBe("2 500,2");
    expect(numberFormat(2500.23, 0, ",", " ")).toBe("2 500");
    expect(numberFormat(2500, 2, ",", " ")).toBe("2 500,00");
    expect(numberFormat(2500.23, 3, ",", " ")).toBe("2 500,230");
  });
});

describe("/formatting/chunk", () => {
  it("stringChunk() splits a string into smaller chunks", () => {
    expect(stringChunk("Hello world", 4)).toStrictEqual([
      "Hell",
      "o wo",
      "rld",
    ]);
  });
  it("stringChunk() skips last element if requested", () => {
    expect(stringChunk("Hello world", 4, true)).toStrictEqual(["Hell", "o wo"]);
  });
  it("arrayChunk() splits an array into smaller chunks", () => {
    expect(arrayChunk(["a", "b", "c", "d", "e"], 2)).toStrictEqual([
      ["a", "b"],
      ["c", "d"],
      ["e"],
    ]);
  });
  it("arrayChunk() skips last element if requested", () => {
    expect(arrayChunk(["a", "b", "c", "d", "e"], 2, true)).toStrictEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
});
