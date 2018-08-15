import { ModuleInfo } from "./module-info";
import idName from "./id-name";
/** */
export default function parentName(info: ModuleInfo): string[] {
  if (!info) return [];  
  const value = [...parentName(info.parent), idName(info.filename)]
    // not empty
    .filter(x => !!x);
  return value;
}
