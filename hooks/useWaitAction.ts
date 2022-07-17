import { useState, useMemo } from "react"

export const useWaitAction = <T extends unknown>(fn: () => T) => {
  const [ waiting, setWait ] = useState(false)

  const promiseFunctionWrapper = async (): Promise<T> => {
    setWait(true)
    const res = await fn()
    setWait(false)
    return res
  }

  const functionWrapper = (): T => {
    setWait(true)
    const res = fn()
    setWait(false)
    return res
  }

  const isPromise = useMemo<boolean>((): boolean => fn instanceof Promise || typeof (fn() as Promise<T>)?.then === "function", [])

  return {
    waiting: () => waiting,
    fn: isPromise ? promiseFunctionWrapper : functionWrapper
  }
}