/** */
describe("create-debug: module-debugger", () => {
    it("sets namespace", async () => {
        const xDebug = (await import("@local/module-x")).default;
        expect(xDebug.namespace).toBe("@local/module-x");
    });
});
