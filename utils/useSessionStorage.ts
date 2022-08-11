import { useState, useEffect } from "react"

export const useSessionStorage = <T>(
  key: string,
  defaultValue: T
): [() => T, React.Dispatch<React.SetStateAction<T>>] => {
  const [ storage, serializer, parser ] = [ window?.sessionStorage, JSON.stringify, JSON.parse ]

  // check support to session storage
  const isSupportSessionStorage = () => typeof storage !== "undefined"

  const [ storedValue, setValue ] = useState<T>(() => {
    if (!isSupportSessionStorage()) return defaultValue

    try {
      const item = storage.getItem(key)
      return item ? parser(item) : defaultValue

    } catch (_) {
      console.log("failed operate session storage")
    }
    return defaultValue
  })

  useEffect(() => {
    if (!isSupportSessionStorage()) return

    try {
      if (storedValue) {
        storage.setItem(key, serializer(storedValue))
      } else {
        storage.removeItem(key)
      }
    } catch (_) {
      console.log("failed operate session storage")
    }
  }, [storedValue])

  return [
    () => storedValue,
    setValue
  ]
}
