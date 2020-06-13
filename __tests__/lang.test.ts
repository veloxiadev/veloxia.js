/* eslint-disable @typescript-eslint/camelcase */
import { sv_SE } from "../src";

describe("/lang/sv_SE", () => {
  it("sv_SE is defined", () => {
    expect(sv_SE.terms.Months.Full[1]).toBe("januari");
  });
});
