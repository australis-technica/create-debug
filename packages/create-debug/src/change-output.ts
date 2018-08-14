import { IDebugger } from "debug";
/** */
export default function changeOutput(out: string) {
  /** */
  return <T extends IDebugger> (d: T):T=> {
    switch (out) {
      case "stdout": {
        d.log = console.log.bind(console);
        break;
      }
      default: {
        // ....
      }
    }
    return d;
  };
}
