import { extname } from "path";

function isMatch(tests: (string | RegExp)[]) {
  if (!tests) return () => false;

  function matchString(test: any, x: string) {
    return typeof test === "string" && test === x;
  }
  function matchRegex(test: any, x: string) {
    return test && typeof test.test === "function" && test.test(x);
  }
  return (x: string) => {
    for (const test of tests) {
      if (matchString(test, x)) return true;
      if (matchRegex(test, x)) return true;
    }
    return false;
  }
}
/** */
export default function idName(s: string, tests?: (string | RegExp)[]) {
  const last = s
    .replace(extname(s), "")
    .split(/\/|\\/)
    .reduce((_out, next, i, all) => {
      // last segment
      const ret = all.length === i + 1 ? next : "";
      if (!ret) return ret;
      // ignore index.*
      if (/index\.*$/.test(ret)) {
        // ...prev
        return all[i - 1];
      }
      if (isMatch(tests)(ret)) {
        // ...prev
        return all[i - 1];
      }
      return ret;
    });
  // remove extension  
  return last;
}