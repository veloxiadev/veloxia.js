import { sleep, awaitCondition } from "../src/index";

describe("/utils", () => {
  it("sleep() makes the script sleep", async () => {
    const begin = Date.now();
    await sleep(1000);
    const duration = Date.now() - begin;
    expect(duration).toBeGreaterThanOrEqual(1000);
  });

  it("awaitCondition() awaits a condition", async () => {
    let aVariable;
    setTimeout(() => {
      aVariable = "Hello";
    }, 1000);
    expect(aVariable).toBeUndefined();
    await awaitCondition(() => aVariable !== undefined);
    expect(aVariable).toBe("Hello");
  });
});
