/** */
describe("naming", () => {
  /** */
  it("works", async () => {
    const moduleInfo = (await import("../src/module-info")).default;
    const moduleInfoName = (await import("../src/module-info-name")).default;
    const info = moduleInfo(module);
    const moduleName = moduleInfoName(info);
    expect(moduleName).toBe("test/naming");
  });
});
