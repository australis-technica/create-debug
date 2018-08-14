/** */
describe("id-name", () => {
  it("works", async () => {
    const idName = (await import("../src/id-name")).default;
    expect(idName("index.x")).toBe("index");
    expect(idName("x/index.x")).toBe("x");
    expect(idName("y/x/index.x")).toBe("x");
    expect(idName("/y/x/index.x")).toBe("x");
    expect(idName("/y/x/x.x")).toBe("x");
    expect(idName("/x/y/z/x.x")).toBe("x");
  });
});
