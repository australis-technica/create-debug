import modulex , { debug as xDebug }from "@local/module-x";
import { debugModule } from "@australis/create-debug";
const debug = debugModule(module);
debug("Started");
console.log("xModule: debug: namespace: %s", xDebug.namespace);
console.log("Module-x: message: %s", modulex());
export default debug;