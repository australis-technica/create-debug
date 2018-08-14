process.env.DEBUG_NAMESPACE_SUFFIX="";
/** */
describe("create-debug: module-debugger", () => {    
    it("sets namespace", async () => {
        const xmodule = (await import("./x-module"));
        const debug = xmodule.default;
        const {submodule} = xmodule;
        expect(debug.namespace).toBe("test/x-module");
        expect(submodule.namespace).toBe("test/x-module/x-sub-module");
    })    
})
/** */
describe("naming", ()=>{
    /** */
    it("works", async ()=>{
        const moduleInfo = (await import("../src/module-info")).default;
        const moduleInfoName =(await  import("../src/module-info-name")).default;
        const idName = (await import("../src/id-name")).default
        const info = moduleInfo(module)
        const moduleName = moduleInfoName(info);
        const id = idName(moduleName);
        expect(id).toBe("create-debug/test")
    });
});