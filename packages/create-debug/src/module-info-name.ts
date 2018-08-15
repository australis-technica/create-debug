import { ModuleInfo } from "./module-info";
import idName from "./id-name";
import { dirname } from "path";
import parentName from "./parent-name";
/** */
export default function moduleInfoName(info: ModuleInfo, sep = "/"): string {
  const pkgName = info.package && info.package.name || "";
  const pkgMainDir = info.package && info.package.main && dirname(info.package.main);
  const xName = idName(info.filename, [pkgMainDir]);
  return [
    pkgName, ...parentName((info.parent)), xName
  ].filter(x => !!x).join(sep);
}