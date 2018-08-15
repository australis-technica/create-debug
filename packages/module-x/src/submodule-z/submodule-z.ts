import { debugModule } from "@australis/create-debug";

const debug = debugModule(module);
debug("my Debug namespace is %s", debug.namespace);
export default debug;