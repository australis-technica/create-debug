const xModule = require("./").default;
/** */
describe("module-y", ()=>{
    it("works", ()=>{
        expect(xModule.namespace).toBe("@local/module-y");
    })
})