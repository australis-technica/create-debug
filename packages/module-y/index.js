// Object.defineProperty(exports, "__esModule", { value: true });
const {debugModule} = require("@australis/create-debug");
const debug = debugModule(module);
debug("my Debug namespace is %s", debug.namespace);
exports.__esModule = true;
exports.default = debug;
