import { IDebug, IDebugger } from "debug";
import changeOutput from "./change-output";
import moduleNameSpace from "./module-namespace";
/**
 *
 */
export default function createDebug(Debug: IDebug, out = process.env.DEBUG_TO) {
  const { DEBUG_NAMESPACE_SUFFIX } = process.env;
  const terminator =
    DEBUG_NAMESPACE_SUFFIX !== null &&
    typeof DEBUG_NAMESPACE_SUFFIX === "string"
      ? DEBUG_NAMESPACE_SUFFIX
      : "";
  //
  return (target: NodeModule): IDebugger => {
    const namespace = moduleNameSpace(target) + terminator;
    return changeOutput(out)(Debug(namespace));
  };
}
