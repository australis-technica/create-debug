import { basename, extname } from "path";

const pkg = require("../package.json");

describe("module-info-name", () => {
    it("works", async () => {
        const moduleInfoName = (await import("../src/module-info-name")).default;
        const xName = moduleInfoName({
            dirname: __dirname,
            filename: __filename,
            id: __filename,
            parent: undefined,
            main: undefined,
            package: {
                name: pkg.name,
                main: pkg.main
            }
        });
        const expected = `${pkg.name}/${basename(__filename).replace(extname(__filename), "")}`;
        expect(xName).toBe(expected);
    })
})