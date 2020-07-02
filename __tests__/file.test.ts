import { fr, fw } from "../src/index";
import * as path from "path";
import * as fs from "fs";
describe("/file", () => {
  beforeAll(() => {
    fw<string>(__dirname, "./test_data/test.json", JSON.stringify({}));
    it("fr() can open a file", () => {
      const file = fr(__dirname, "./test_data/test.json");
      expect(file).toStrictEqual({});
    });
  });
  it("fw() can write to a JSON file and fr() can then read it", () => {
    fw<any>(__dirname, "./test_data/test2.json", { hello: 123 });
    expect(
      fs.existsSync(path.resolve(__dirname, "./test_data/test2.json"))
    ).toBeTruthy();
    const file = fr<any>(__dirname, "./test_data/test2.json");
    expect(file).toStrictEqual({ hello: 123 });
  });
  it("fw() can write a CSV file and fr() can then read it", () => {
    fw<string>(__dirname, "./test_data/test3.csv", `A;B;C\n1;2;3\n`);
    expect(
      fs.existsSync(path.resolve(__dirname, "./test_data/test3.csv"))
    ).toBeTruthy();
    const file = fr<string>(__dirname, "./test_data/test3.csv");
    expect(file).toStrictEqual(`A;B;C\n1;2;3\n`);
  });
  it("fw() throws when it can't convert input to string", () => {
    expect(() => {
      fw<any>(__dirname, "./test_data/test4.txt", {
        toString: () => () => 123,
      });
    }).toThrow();
  });
  it("fr() returns undefined when file doesn't exist", () => {
    expect(
      fr<any>(__dirname, "./test_data/does_not_exist.abc")
    ).toBeUndefined();
  });
  it("fw() can write a YML file and fr() can then read it", () => {
    fw<any>(__dirname, "./test_data/test5.yaml", "- 123");
    const file = fr<any>(__dirname, "./test_data/test5.yaml");
    expect(file).toStrictEqual("- 123");
  });
  afterAll(() => {
    fs.rmdirSync(path.resolve(__dirname, "./test_data"), { recursive: true });
  });
});
