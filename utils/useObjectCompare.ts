import { useState, useEffect } from "react"

export const useObjectCompare = (obj1: Record<string, unknown>, obj2: Record<string, unknown>) => {
  const [ difference, setDifference ] = useState(false)

  // true: same struct and value
  // false: difference struct or value
  const compare = (obj1: Record<string, unknown>, obj2: Record<string, unknown>): boolean => {
    // compare object sort keys
    if (JSON.stringify(Object.keys(obj1).sort()) !== JSON.stringify(Object.keys(obj1).sort())) return true

    return Object.entries(obj1).map(([key, val]) => {
      // case: types unmatch
      if (typeof val !== typeof obj2[key]) return false

      if (Array.isArray(val)) {
        // case: array
        return JSON.stringify(val) === JSON.stringify(obj2[key])

      } else if (typeof val === "object") {
        // case: object
        return compare(val as Record<string, unknown>, obj2[key] as Record<string, unknown>)
      }

      // case: primitive
      return val === obj2[key]

    }).some(b => !b)  // if even once difference return `true`
  }

  useEffect(() => {
    setDifference(compare(obj1, obj2))
  }, [obj1, obj2])

  return { difference: () => difference }
}