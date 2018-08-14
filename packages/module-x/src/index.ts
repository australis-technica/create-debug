import { debugModule } from "@australis/create-debug";
export const debug = debugModule(module);
export default () => {
  const message = "Hello";
  debug(message);
  return message;
};
