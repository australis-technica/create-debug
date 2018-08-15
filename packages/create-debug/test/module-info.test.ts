import { dirname } from "path";

const pkg = require("../package.json");

describe("module-info", () => {
    it("works", async () => {                
        const moduleInfo = (await import("../src/module-info")).default;
        const info = moduleInfo(module);
        expect(info.dirname).toBe(__dirname);
        expect(info.filename).toBe(__filename);
        expect(info.id).toBe(module.id);
        const { id, filename, } = (module.require as NodeRequire).main
        const main = { id, filename, dirname: dirname(filename), package: {
            name: pkg.name,
            description: pkg.description,
            version: pkg.version,
            main: pkg.main
        } };
        expect(info.main).toMatchObject(main);
    })
});