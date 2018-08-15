import { dirname } from "path";
/** */
export interface ModuleInfo  {
  id: string;
  filename: string;
  dirname: string;
  parent: ModuleInfo|undefined;
  main: ModuleInfo|undefined;
};
/** */
export default function moduleInfo(xModule: NodeModule): ModuleInfo {
  if (!xModule) {
    return undefined;
  }
  const mainModule = process.mainModule;
  const { id, filename, parent } = xModule;
  if (!id) {
    return undefined;
  }
  const isRoot = parent && parent.id === id;
  const info: ModuleInfo = {
    id,
    filename,
    dirname: dirname(filename),
    main: {
      id: mainModule.id,
      filename: mainModule.filename,
      dirname: dirname(mainModule.filename),
      parent: undefined,
      main: undefined
    },
    parent: isRoot ? undefined : moduleInfo(parent),
  };
  return info;
}
