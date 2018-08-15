import { dirname } from "path";
import packageInfo, { PackageInfo } from "./package-info";
/** */
export interface ModuleInfo {
  id: string;
  filename: string;
  dirname: string;
  parent: ModuleInfo | undefined;
  main: ModuleInfo | undefined;
  package: PackageInfo
};
/** */
export default function moduleInfo(xModule: NodeModule): ModuleInfo {
  if (!xModule) {
    return undefined;
  }
  const { id, filename, parent } = xModule;
  if (!id) {
    return undefined;
  }
  const info: ModuleInfo = {
    id,
    filename,
    dirname: dirname(filename),
    parent: (parent && parent.id === id) ? undefined : moduleInfo(parent),
    package: packageInfo(filename),
    main: {
      ...mainInfo(process.mainModule || (xModule.require as NodeRequire).main),
      parent: undefined,
      main: undefined
    },
  };
  return info;
}

function mainInfo(xModule: NodeModule) {
  return xModule && {
    id: xModule.id,
    filename: xModule.filename,
    dirname: dirname(xModule.filename),
    package: packageInfo(xModule.filename),
  }
}