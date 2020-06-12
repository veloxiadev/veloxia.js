import * as v from "../src/index";

describe("@veloxia/veloxia methods", () => {
  it("v.numberFormat() converts numbers to pretty strings", () => {
    expect(v.numberFormat(259000)).toBe("259 000");
    expect(v.numberFormat(2259000.93)).toBe("2 259 000");
    expect(v.numberFormat(259000.97, 2, ",", " ")).toBe("259 000,97");
  });
  it("v.booleanToString() converts truthy and falsy values to yes/no", () => {
    expect(v.booleanToString(true, "Ja", "Nej")).toBe("Ja");
    expect(v.booleanToString(false, "Ja", "Nej")).toBe("Nej");
    expect(v.booleanToString(1)).toBe("Ja");
    expect(v.booleanToString(0)).toBe("Nej");
  });

  it("v.sv_SE is defined", () => {
    expect(v.sv_SE.terms.Months.Full[1]).toBe("januari");
  });

  it("v.random() generates random numbers that average around min + 0.5 x (max-min)", () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      const rand = v.random(10, 30);
      sum += rand;
      expect(rand).toBeLessThanOrEqual(30);
      expect(rand).toBeGreaterThanOrEqual(10);
    }
    // Should average around 20
    expect(sum / 1000).toBeGreaterThanOrEqual(18);
    expect(sum / 1000).toBeLessThanOrEqual(22);
  });

  it("v.randomInteger() generates random INTEGERS", () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      const rand = v.randomInteger(10, 30);
      sum += rand;
      expect(rand).toBeLessThanOrEqual(30);
      expect(rand).toBeGreaterThanOrEqual(10);
      expect(Math.round(rand)).toBe(rand);
    }
    // Should average around 20
    expect(sum / 1000).toBeGreaterThanOrEqual(18);
    expect(sum / 1000).toBeLessThanOrEqual(22);
  });

  it("v.randomString() generates a string of the requested length ", () => {
    const str = v.randomString(10);
    expect(str.length).toBe(10);
    expect(str).toMatch(/^[\w\d]{10}$/);
  });

  it("v.LITERAL_TIME_PARSER_RULES are callable", () => {
    for (const r in v.LITERAL_TIME_PARSER_RULES) {
      expect(
        v.LITERAL_TIME_PARSER_RULES[r].provide.call(this, {
          num: 1,
          unit: "day",
        })
      ).toBeDefined();
    }
  });

  it("v.date() makes correct conversions", () => {
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

  it("v.sleep() makes the script sleep", async () => {
    const begin = Date.now();
    await v.sleep(2000);
    const duration = Date.now() - begin;
    expect(duration).toBeGreaterThan(2000);
  });

  it("v.awaitCondition() awaits a condition", async () => {
    let aVariable;
    setTimeout(() => {
      aVariable = "Hello";
    }, 2000);
    expect(aVariable).toBeUndefined();
    await v.awaitCondition(() => aVariable !== undefined);
    expect(aVariable).toBe("Hello");
  });
});
