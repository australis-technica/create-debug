import { ModuleInfo } from "./module-info";
import idName from "./id-name";
import { dirname, join } from "path";
import parentName from "./parent-name";
import { samePackage } from "./package-info";
/** */
export default function moduleInfoName(info: ModuleInfo, sep = "/"): string {
  const pkgName = info.package && info.package.name || "";
  /**
   * out/bin/lib ...etc
   */
  const pkgMainDir = info.package && info.package.main && dirname(info.package.main);
  const pkgDir = info.package && info.package.dirname;
  let xName = info.filename.replace(join(pkgDir, pkgMainDir), "");
  xName = idName(xName);
  const parents = !info.parent || !samePackage(info.package, info.parent.package) ? [] : parentName(info.parent);
  const value = [
    pkgName, ...parents, xName
  ]
    // not-empty
    .filter(x => !!x)
    .join(sep);
  return value;
}