process.env.DEBUG_NAMESPACE_SUFFIX = "";
/** */
describe("create-debug: module-debugger", () => {
  it("sets namespace", async () => {
    const xmodule = await import("./x-module");
    const debug = xmodule.default;
    const { submodule } = xmodule;
    expect(debug.namespace).toBe("@australis/create-debug/test/x-module");
    expect(submodule.namespace).toBe("@australis/create-debug/test/x-module/x-sub-module");
  });
});
