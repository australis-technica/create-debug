import { join } from "path";
import { debug } from "../";
describe(require(join(__dirname, "../package.json")).name, () => {
  it("works", () => {
    expect(debug.namespace).toBe("local/app-x");
  });
});
