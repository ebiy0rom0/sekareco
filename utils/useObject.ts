import { useState, useEffect } from "react"

export const useObject = (obj1: Record<string, unknown>, obj2: Record<string, unknown>) => {
  const [ diff, setDiff ] = useState(false)

  const compare = (obj1: Record<string, unknown>, obj2: Record<string, unknown>): boolean =>
    Object.entries(obj1).map(([key, val]) => {
      if (obj2[key] === "undefined") return false
      if (typeof val !== typeof obj2[key]) return false
      if (Array.isArray(val)) {
        return JSON.stringify(val) === JSON.stringify(obj2[key])
      } else if (typeof val === "object") {
        return compare(val as Record<string, unknown>, obj2[key] as Record<string, unknown>)
      } else {
        return val === obj2[key]
      }
    }).some(b => !b)

  useEffect(() => {
    setDiff(compare(obj1, obj2))
  }, [obj1, obj2])

  return { diff: () => diff }
}