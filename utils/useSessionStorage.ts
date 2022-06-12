import { useState, useEffect } from "react"

export const useSessionStorage = <T>(
  key: string,
  defaultValue: T
): [() => T, React.Dispatch<React.SetStateAction<T>>] => {
  const [ serializer, parser ] = [ JSON.stringify, JSON.parse ]

  const [ storedValue, setValue ] = useState<T>(() => {
    if (!supportedSessionStorage()) return defaultValue

    try {
      const item = window.sessionStorage.getItem(key)
      return item ? parser(item) : defaultValue

    } catch (_) {
      console.log("failed operate session storage")
    }
    return defaultValue
  })

  // check support to session storage
  const supportedSessionStorage = () => typeof window.sessionStorage !== "undefined"

  useEffect(() => {
    if (!supportedSessionStorage()) return

    try {
      if (storedValue) {
        window.sessionStorage.setItem(key, serializer(storedValue))
      } else {
        window.sessionStorage.removeItem(key)
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
