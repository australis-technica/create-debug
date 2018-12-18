import moduleDebugger, { Options } from "./module-debugger";
import { IDebugger } from "debug";

export default (m: NodeModule, options?: Options): IDebugger => {
  return moduleDebugger(require("debug"), options)(m);
};