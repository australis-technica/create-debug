/** */
export default function idName(s: string) {
    const last = s
      .split(".")[0]
      .split(/\/|\\/)
      .reduce((_prev, next, i, all) => {
        const ret = all.length === i + 1 ? next : "";
        return /index\.*$/.test(ret) ? all[i - 1] : ret;
      });
      const name = last.split(".")[0];
    return name;
  }