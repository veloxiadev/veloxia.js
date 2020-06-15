import {
  date,
  numberFormat,
  booleanToString,
  chunkString,
  chunkArray,
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
  it("chunkString() splits a string into smaller chunks", () => {
    expect(chunkString("Hello world", 4)).toStrictEqual([
      "Hell",
      "o wo",
      "rld",
    ]);
  });
  it("chunkString() skips last element if requested", () => {
    expect(chunkString("Hello world", 4, true)).toStrictEqual(["Hell", "o wo"]);
  });
  it("chunkArray() splits an array into smaller chunks", () => {
    expect(chunkArray(["a", "b", "c", "d", "e"], 2)).toStrictEqual([
      ["a", "b"],
      ["c", "d"],
      ["e"],
    ]);
  });
  it("chunkArray() skips last element if requested", () => {
    expect(chunkArray(["a", "b", "c", "d", "e"], 2, true)).toStrictEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
});

describe("/formatting/date", () => {
  it("date() handles Y-m-d", () => {
    expect(
      date(
        "Y-m-d",
        new Date(1000 * 3600 * 24 * 365 * 50 + 1000 * 3600 * 24 * 175)
      )
    ).toBe("2020-06-12");
    expect(
      date(
        "Y-m-d",
        new Date(1000 * 3600 * 24 * 365 * 50 + 1000 * 3600 * 24 * 170)
      )
    ).toBe("2020-06-07");
  });
  it("date() handles Y-m-d H:i:s", () => {
    expect(
      date(
        "Y-m-d 00:i:s",
        new Date(1000 * 3600 * 24 * 365 * 50 + 1000 * 3600 * 24 * 350)
      )
    ).toBe("2020-12-04 00:00:00");
    expect(date("Y-m-d H:i:s", "2020-01-01 01:01:01")).toBe(
      "2020-01-01 01:01:01"
    );
    expect(date("Y-m-d H:i:s", "2020-01-01 15:01:01")).toBe(
      "2020-01-01 15:01:01"
    );
    expect(date("Y-m-d H:i:s", "2020-01-01 15:12:01")).toBe(
      "2020-01-01 15:12:01"
    );
    expect(date("Y-m-d H:i:s", "2020-01-01 15:12:31")).toBe(
      "2020-01-01 15:12:31"
    );
  });

  it("date() handles literal syntax", () => {
    expect(date("Y-m-d", "yesterday")).toBe(
      date("Y-m-d", Date.now() - 1000 * 3600 * 24)
    );
    expect(date("Y-m-d", "-1 day")).toBe(
      date("Y-m-d", Date.now() - 1000 * 3600 * 24)
    );
    expect(date("Y-m-d", "+1 day")).toBe(
      date("Y-m-d", Date.now() + 1000 * 3600 * 24)
    );
    expect(date("Y-m-d", "-1 week")).toBe(
      date("Y-m-d", Date.now() - 1000 * 3600 * 24 * 7)
    );
    expect(date("Y-m-d", "+1 week")).toBe(
      date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 7)
    );
    expect(date("Y-m-d", "12 months ago")).toBe(
      date("Y-m-d", Date.now() - 1000 * 3600 * 24 * 30 * 12)
    );
    expect(date("Y-m-d", "in 12 months")).toBe(
      date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 30 * 12)
    );
    expect(date("Y-m-d", "1 year ago")).toBe(
      date("Y-m-d", Date.now() - 1000 * 3600 * 24 * 365)
    );
    expect(date("Y-m-d", "in 1 year")).toBe(
      date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 365)
    );
    expect(date("Y-m-d H:i", "in 1 hour")).toBe(
      date("Y-m-d H:i", Date.now() + 1000 * 3600)
    );
    expect(date("Y-m-d H:i", "in 1 minute")).toBe(
      date("Y-m-d H:i", Date.now() + 1000 * 60)
    );
    expect(date("Y-m-d H:i:s", "in 1 second")).toBe(
      date("Y-m-d H:i:s", Date.now() + 1000)
    );
    expect(date("Y-m-d H:i:s", "now")).toBe(date("Y-m-d H:i:s", Date.now()));
    expect(date("Y-m-d H:i:s", "today")).toBe(date("Y-m-d H:i:s", Date.now()));
    expect(date("Y-m-d", "tomorrow")).toBe(
      date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 1)
    );
    expect(date("Y-m-d", "next week")).toBe(
      date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 7)
    );
    expect(date("Y-m-d", "next month")).toBe(
      date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 30)
    );
    expect(date("Y-m-d", "next year")).toBe(
      date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 365)
    );
    expect(date("Y-m-d", "yesterday")).toBe(
      date("Y-m-d", Date.now() - 1000 * 3600 * 24)
    );
    expect(date("Y-m-d", "last week")).toBe(
      date("Y-m-d", Date.now() - 1000 * 3600 * 24 * 7)
    );
    expect(date("Y-m-d", "last month")).toBe(
      date("Y-m-d", Date.now() - 1000 * 3600 * 24 * 30)
    );
    expect(date("Y-m-d", "last year")).toBe(
      date("Y-m-d", Date.now() - 1000 * 3600 * 24 * 365)
    );
  });
  it("date() is callable without parameters", () => {
    expect(date()).toBeDefined();
    expect(date()).toBe(date("Y-m-d"));
  });
});
