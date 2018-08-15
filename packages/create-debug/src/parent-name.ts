import { ModuleInfo } from "./module-info";
import idName from "./id-name";
/** */
export default function parentName(info: ModuleInfo): string[] {
  if (!info) return [];
  return [...parentName(info.parent), idName(info.filename)].filter(x => !!x);
}
