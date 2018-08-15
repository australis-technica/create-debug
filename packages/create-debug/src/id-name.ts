import { extname } from "path";
/** */
export default function idName(s: string) {  
  // ...
  const parts = s
    .replace(extname(s), "")
    .split(/\/|\\/)
    .filter(s => !!s && !/index\.*$/.test(s))
    .reduce((out, next, i, all) => {
      out += all.length === i + 1 ? next : "";
      return out;
    }, "");
  return parts;
  // const last = s
  //   .replace(extname(s), "")
  //   .split(/\/|\\/)
  //   .reduce((_out, next, i, all) => {
  //     // last segment
  //     const ret = all.length === i + 1 ? next : "";
  //     if (!ret) return ret;
  //     // ignore index.*
  //     if (/index\.*$/.test(ret)) {
  //       // ...prev
  //       return all[i - 1];
  //     }
  //     if (isMatch(ret)) {
  //       // ...prev
  //       return all[i - 1];
  //     }
  //     return ret;
  //   });
  // // remove extension  
  // return last;
}