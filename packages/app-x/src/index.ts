import modulex from "@local/module-x";
import { debugModule } from "@australis/create-debug";
export const debug = debugModule(module);
debug("Started");
console.log("Module-x: message: %s", modulex());
