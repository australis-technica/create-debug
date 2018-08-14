import { debugModule } from "@australis/create-debug";
const debug = debugModule(module);
export default () => {
  debug("Hello");
};
