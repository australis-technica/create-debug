import { Log } from "./types";
import { IDebugger } from "debug";
import moduleDebugger from "./module-debugger";

const debugModule = (m: NodeModule, options?: {
    out?: Log;
    suffix?: string;
}): IDebugger => moduleDebugger(require("debug"), options)(m);

export default debugModule;