const { debugModule } = require("../create-debug");
const debug = debugModule(module);
require("./submodule");
debug("Hello");