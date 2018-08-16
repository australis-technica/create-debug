import { join } from "path";
/**
 * 
 */
describe(require(join(__dirname, "../package.json")).name, () => {
  /**
   * Side effect of importing from ./src
   */
  it("namespaces src/", async () => {
    const debug = (await import("../src")).default;
    expect(debug.namespace).toBe("@local/module-x|src");
  });
  /** Import from Module */
  it("namespaces /", async () => {
    const debug = (await import("../")).default;
    expect(debug.namespace).toBe("@local/module-x");
  });
});
