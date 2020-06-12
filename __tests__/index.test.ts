import * as v from "../src/index";

describe("@veloxia/veloxia methods", () => {
  it("numberFormat()", () => {
    expect(v.numberFormat(259000)).toBe("259 000");
    expect(v.numberFormat(2259000.93)).toBe("2 259 000");
    expect(v.numberFormat(259000.97, 2, ",", " ")).toBe("259 000,97");
  });
  it("booleanToString()", () => {
    expect(v.booleanToString(true, "Ja", "Nej")).toBe("Ja");
    expect(v.booleanToString(false, "Ja", "Nej")).toBe("Nej");
    expect(v.booleanToString(1)).toBe("Ja");
    expect(v.booleanToString(0)).toBe("Nej");
  });

  it("sv_SE", () => {
    expect(v.sv_SE.terms.Months.Full[1]).toBe("januari");
  });

  it("date()", () => {
    expect(
      v.date(
        "Y-m-d",
        new Date(1000 * 3600 * 24 * 365 * 50 + 1000 * 3600 * 24 * 175)
      )
    ).toBe("2020-06-12");
    expect(
      v.date(
        "Y-m-d",
        new Date(1000 * 3600 * 24 * 365 * 50 + 1000 * 3600 * 24 * 170)
      )
    ).toBe("2020-06-07");
    expect(
      v.date(
        "Y-m-d 00:i:s",
        new Date(1000 * 3600 * 24 * 365 * 50 + 1000 * 3600 * 24 * 350)
      )
    ).toBe("2020-12-04 00:00:00");
    expect(v.date("Y-m-d H:i:s", "2020-01-01 01:01:01")).toBe(
      "2020-01-01 01:01:01"
    );
    expect(v.date("Y-m-d H:i:s", "2020-01-01 15:01:01")).toBe(
      "2020-01-01 15:01:01"
    );
    expect(v.date("Y-m-d H:i:s", "2020-01-01 15:12:01")).toBe(
      "2020-01-01 15:12:01"
    );
    expect(v.date("Y-m-d H:i:s", "2020-01-01 15:12:31")).toBe(
      "2020-01-01 15:12:31"
    );

    expect(v.date("Y-m-d", "yesterday")).toBe(
      v.date("Y-m-d", Date.now() - 1000 * 3600 * 24)
    );
    expect(v.date("Y-m-d", "-1 day")).toBe(
      v.date("Y-m-d", Date.now() - 1000 * 3600 * 24)
    );
    expect(v.date("Y-m-d", "+1 day")).toBe(
      v.date("Y-m-d", Date.now() + 1000 * 3600 * 24)
    );
    expect(v.date("Y-m-d", "-1 week")).toBe(
      v.date("Y-m-d", Date.now() - 1000 * 3600 * 24 * 7)
    );
    expect(v.date("Y-m-d", "+1 week")).toBe(
      v.date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 7)
    );
    expect(v.date("Y-m-d", "12 months ago")).toBe(
      v.date("Y-m-d", Date.now() - 1000 * 3600 * 24 * 30 * 12)
    );
    expect(v.date("Y-m-d", "in 12 months")).toBe(
      v.date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 30 * 12)
    );
    expect(v.date("Y-m-d", "1 year ago")).toBe(
      v.date("Y-m-d", Date.now() - 1000 * 3600 * 24 * 365)
    );
    expect(v.date("Y-m-d", "in 1 year")).toBe(
      v.date("Y-m-d", Date.now() + 1000 * 3600 * 24 * 365)
    );
    expect(v.date("Y-m-d H:i", "in 1 hour")).toBe(
      v.date("Y-m-d H:i", Date.now() + 1000 * 3600)
    );
    expect(v.date("Y-m-d H:i", "in 1 minute")).toBe(
      v.date("Y-m-d H:i", Date.now() + 1000 * 60)
    );
    expect(v.date("Y-m-d H:i:s", "in 1 second")).toBe(
      v.date("Y-m-d H:i:s", Date.now() + 1000)
    );
    expect(v.date()).toBeDefined();
  });
});
