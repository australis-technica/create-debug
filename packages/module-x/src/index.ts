import { debugModule } from "@australis/create-debug";
const debug = debugModule(module);
export default () => {
  const message = "Hello";
  debug(message);
  return message;
};
export {
  debug
}
