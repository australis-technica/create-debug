import { IDebugger } from "debug";
import { Log } from "./types";
/** */
export default function changeOutput(log: Log|undefined) {
  /** */
  return <T extends IDebugger>(d: T): T => {
    if (typeof log === "function") d.log = log;
    return d;
  };
}
