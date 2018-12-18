import { dirname, extname, sep, basename } from "path";
import packageInfo from "./package-info";

const log = process.env.NODE_ENV !== "production" ? console.log.bind(console) : (() => { });
/** */
export interface NodeModuleLike {
  filename: string
}
/** */
export default function moduleNamespace(
  xModule: NodeModuleLike,
  delimiter = "|"
): string {
  const pkg = packageInfo(xModule.filename);
  if (!pkg) return basename(xModule.filename).replace(extname(xModule.filename), "");
  if (!pkg.main) { log("Warning: Not package.main ") }

  const mainDir = dirname(pkg.main || "").replace(".", "");

  const regex = `^(?:\\/|\\\\)${mainDir}(.*)`;

  let fullName = xModule.filename
    .replace(pkg.dirname, "")
    .replace(new RegExp(regex), (s, args) => {
      return args || s;
    });

  const xName = basename(fullName)
    .replace(extname(fullName), "")
    .replace(/^index$/, "");

  const parent = dirname(fullName).replace(".", "");

  const parents = parent
    .split(sep)
    .filter(x => !!x)
    .join(delimiter);

  const value = collapse([pkg.name, parents, xName]
    // not-empty
    .filter(Boolean))
    // collapse    
    .join(delimiter);
  return value;
}

export function collapse<T>(x: T[]) {
  return x.reduce((out, next) => {
    if (out[out.length - 1] !== next) {
      out = out.concat(next);
    }
    // else out = out.concat(".")
    return out;
  }, [] as T[])
}