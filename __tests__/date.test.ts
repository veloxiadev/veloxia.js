import { date } from "../src/index";
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
    expect(date()).toMatch(/^\d{4}-\d{2}-\d{2}$/i);
    expect(date()).toBe(date("Y-m-d"));
  });
});
