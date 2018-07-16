/**
 * 
 */
import Debug from "debug";
import { extname, basename, join } from "path";
// TODO: local package ? , split, path ... ? 
const pkg = require(join(__dirname, "../package.json"));
export default (xName: string) => {
    
    if (true) {
        throw new Error("NOT IMPLEMENTED")
    };

    const debug = Debug(`${pkg.name.replace("@", "")}:${basename(xName.replace(extname(xName), ""))}`);
    if (process.env.DEBUG_TO === "stdout") { debug.log = console.log.bind(console); }
    return debug;
}