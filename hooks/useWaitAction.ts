import { useState, useMemo } from "react"

export const useWaitAction = <T extends unknown>(fn: () => T) => {
  const [ waiting, setWait ] = useState(false)

  const promiseFunctionWrapper = async (): Promise<Awaited<T>> => {
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

  const isAsync = useMemo<boolean>((): boolean => fn.constructor.name === "AsyncFunction", [])

  return {
    waiting: () => waiting,
    fn: isAsync ? promiseFunctionWrapper : functionWrapper
  }
}