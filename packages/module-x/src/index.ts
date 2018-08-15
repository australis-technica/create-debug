import { debugModule } from "@australis/create-debug";
const debug = debugModule(module);
debug("my Debug namespace = %s", debug.namespace);
export default debug;
export { debug as  submoduleZ } from "./submodule-z";