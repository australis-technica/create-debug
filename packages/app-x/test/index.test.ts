import { join } from "path";

describe(require(join(__dirname, "../package.json")).name, () => {
  it("works", async () => {
    const debug = (await import("../src")).default;
    expect(debug.namespace).toBe("local/app-x");
  });
});
