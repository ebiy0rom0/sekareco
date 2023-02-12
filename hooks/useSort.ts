import { useMemo } from "react";

export const useSort = <T, U extends Keys<T>>(
  list: T[],
  opt: [U, boolean | { [m: string]: boolean }][],
) => {
  const sortedList = useMemo(() => {
    return list.sort((t1, t2) => depthSort(t1, t2, opt, 0));
  }, [list, opt]);

  return [sortedList];
};

const depthSort = <T, U extends Keys<T>>(
  p1: T,
  p2: T,
  opts: [U, unknown][],
  depth: number,
): number => {
  const result = sort(p1, p2, ...opts[depth]);
  if (result === 0) {
    return opts[++depth] === undefined ? 0 : depthSort(p1, p2, opts, depth);
  }
  return result;
};

const sort = <T, U extends Keys<T>, W extends Keys<T[U]>>(
  p1: T,
  p2: T,
  key: U,
  asc: unknown,
): number => {
  if (typeof asc === "boolean") {
    if (p1[key] === p2[key]) return 0;
    if (p1[key] < p2[key]) return asc ? -1 : 1;
    return asc ? 1 : -1;
  }

  if (asc !== null && typeof asc === "object") {
    const [[key2, asc2]] = Object.entries(asc);
    if (p1[key][key2 as W] === p2[key][key2 as W]) return 0;
    if (p1[key][key2 as W] < p2[key][key2 as W]) return asc2 ? -1 : 1;
    return asc2 ? 1 : -1;
  }

  return 0;
};
