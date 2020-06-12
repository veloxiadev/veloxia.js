import { literalTimeParserRules } from "../src/utils/literal_time_parser_rules";

describe("@veloxia/veloxia utils", () => {
  it("literalTimeParserRules", () => {
    for (const r in literalTimeParserRules) {
      expect(
        literalTimeParserRules[r].provide({ num: 1, unit: "day" })
      ).toBeDefined();
    }
  });
});
