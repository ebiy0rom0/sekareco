import { useEffect, useState } from "react";

export const useSessionStorage = <T>(
  key: string,
  defaultValue: T,
  reloadKey = 0,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [serializer, parser] = [
    JSON.stringify,
    JSON.parse,
  ];

  const [storedValue, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue

    const storage = window.sessionStorage;
    try {
      const item = storage.getItem(key);
      return item ? parser(item) : defaultValue;
    } catch (_) {
      console.log(errorMsg);
      return defaultValue;
    }
  });

  // reload hook
  // when changed reload key, get storage again by key
  useEffect(() => {
    const storage = window.sessionStorage;
    try {
      const item = storage.getItem(key);
      setValue(item ? parser(item) : storedValue);
    } catch (_) {
      console.log(errorMsg);
    }
  }, [reloadKey]);

  useEffect(() => {
    const storage = window.sessionStorage;
    try {
      if (typeof storedValue === "boolean" || storedValue) {
        storage.setItem(key, serializer(storedValue));
      } else {
        // when updated value empty, remove by storage
        storage.removeItem(key);
      }
    } catch (_) {
      console.log(errorMsg);
    }
  }, [storedValue]);

  return [
    storedValue,
    setValue,
  ];
};

const errorMsg = "failed operate session storage";
