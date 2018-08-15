import { basename, extname } from "path";

const pkg = require("../package.json");
/** */
describe("naming", () => {
  /** */
  it("works", async () => {
    const moduleInfo = (await import("../src/module-info")).default;
    const moduleInfoName = (await import("../src/module-info-name")).default;
    const info = moduleInfo(module);
    const moduleName = moduleInfoName(info);
    const expected = `${pkg.name}/${basename(__filename).replace(extname(__filename), "")}`;
    expect(moduleName).toBe(expected);
  });
});
