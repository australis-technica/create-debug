import { join } from "path";
import src, { debug } from "../";
describe(require(join(__dirname, "../package.json")).name, () => {
  it("works", () => {
    expect(debug.namespace).toBe("local/module-x");
  });
});
