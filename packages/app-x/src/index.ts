import { debugModule } from "@australis/create-debug";
import xDebug from "@local/module-x";
const debug = debugModule(module);
debug("Started");
console.log("xModule: debug: namespace: %s", xDebug.namespace);
export default debug;
