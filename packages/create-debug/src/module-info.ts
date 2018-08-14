export type ModuleInfo = { id: string; parent: ModuleInfo };
/** */
export default function moduleInfo(x: NodeModule): ModuleInfo {
  if (!x) {
    return undefined;
  }
  const { id, parent } = x;
  if (!id) {
    return undefined;
  }
  const isRoot = parent && parent.id === id;
  return {
    id,
    parent: isRoot ? null : moduleInfo(parent)
  };
}
