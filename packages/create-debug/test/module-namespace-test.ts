import { basename, extname, dirname } from "path";

const pkg = require("../package.json");

describe("module-namespace", () => {
    it("works", async () => {
        const moduleInfoName = (await import("../src/module-namespace")).default;
        const xName = moduleInfoName(module);
        const parent = basename(__dirname);
        const expected = `${pkg.name}|${parent}|${basename(__filename).replace(extname(__filename), "")}`;
        expect(xName).toBe(expected);
    })   
    it("ext namespace", async () => {
        const xDebug = (await import("@local/module-x")).default;
        expect(xDebug.namespace).toBe("@local/module-x");
    });
    it("ext namesapce no-main-dir", async ()=>{
        const debug = (await import("@local/module-y")).default;
        expect(debug.namespace).toBe("@local/module-y");
    })
})