import packagePath from "./package-path";
import { dirname } from "path";
/** */
export interface PackageInfo {
    name: string;
    main?: string;
    version?: string;
    description?: string;
    dirname: string;
}
/** */
export function samePackage(a: PackageInfo, b: PackageInfo) {
    if (!a || !b) return a === b;
    return a.name === b.name;
  }
/** */
export default (filename: string): PackageInfo => {
    const path = packagePath(filename);
    const { name, main, version, description } = require(path);
    const pkgDirName = dirname(path);
    return {
        name, main, version, description, dirname: pkgDirName
    };
}