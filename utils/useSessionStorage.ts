import { useState, useEffect } from "react"

export const useSessionStorage = <T>(
  key: string,
  defaultValue: T,
  reloadKey = 0
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [ storage, serializer, parser ] = [ window?.sessionStorage, JSON.stringify, JSON.parse ]

  // server side useless
  // check support to session storage
  const availableStorage = () => typeof storage !== "undefined"

  const [ storedValue, setValue ] = useState<T>(() => {
    if (!availableStorage()) return defaultValue
    try {
      const item = storage.getItem(key)
      return item ? parser(item) : defaultValue
    } catch (_) {
      console.log(errorMsg)
    }
  })

  // reload hook
  // when changed reload key, get storage again by key
  useEffect(() => {
    if (!availableStorage()) return
    try {
      const item = storage.getItem(key)
      setValue(item ? parser(item) : storedValue)
    } catch (_) {
      console.log(errorMsg)
    }
  }, [reloadKey])

  useEffect(() => {
    if (!availableStorage()) return
    try {
      if (storedValue) {
        storage.setItem(key, serializer(storedValue))
      } else {
        // when updated value empty, remove by storage
        storage.removeItem(key)
      }
    } catch (_) {
      console.log(errorMsg)
    }
  }, [storedValue])

  return [
    storedValue,
    setValue
  ]
}

const errorMsg = "failed operate session storage"