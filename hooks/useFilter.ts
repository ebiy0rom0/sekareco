import { useMemo } from "react";

export const useFilter = <T, U extends Keys<T>, V extends T[U], W extends Keys<T[U]>>(list: T[], opt: {[n in U]: V | V[] | {[m: string]: V | V[]}}) => {
  const filteredList = useMemo(() => Object.entries(opt).reduce((prev, [k, v]) => {
    if (v === null) {
      return prev
    }
    if (Array.isArray(v)) {
      return prev.filter((p) => v.includes(p[k as U]))
    } else if (typeof v === "object") {
      return Object.entries(v).reduce((prev2, [k2, v2]) => {
        if (Array.isArray(v2)) {
          return prev2.filter((p) => v2.includes(p[k as U][k2 as W]))
        }
        return prev2.filter((p) => p[k2 as U][k2 as W] === v2)
      }, prev)
    }
    return prev.filter((p) => p[k as U] === v)
  }, list), [list, opt]);

  return [ filteredList ]
}