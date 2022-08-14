import { useState, useEffect } from "react"

export const useSessionStorage = <T>(
  key: string,
  defaultValue: T
): [() => T, React.Dispatch<React.SetStateAction<T>>] => {
  const [ storage, serializer, parser ] = [ window?.sessionStorage, JSON.stringify, JSON.parse ]

  // server side useless
  // check support to session storage
  const availableStorage = () => typeof storage !== "undefined"

  const [ storedValue, setValue ] = useState<T>(() => {
    if (!availableStorage()) return defaultValue

    try {
      const item = storage.getItem(key)
      console.log(`key: ${key}, item: ${item}`)
      return item ? parser(item) : defaultValue

    } catch (_) {
      console.log(errorMsg)
    }
  })

  useEffect(() => {
    if (!availableStorage()) return

    try {
      if (storedValue) {
        storage.setItem(key, serializer(storedValue))
      } else {
        storage.removeItem(key)
      }
    } catch (_) {
      console.log(errorMsg)
    }
  }, [storedValue])

  return [
    () => storedValue,
    setValue
  ]
}

const errorMsg = "failed operate session storage"