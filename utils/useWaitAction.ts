import { useState, useMemo } from "react"

// deno-lint-ignore no-explicit-any
export const useWaitAction = <T extends unknown, U extends any[]>(fn: (...arg: U) => T) => {
  const [ waiting, setWait ] = useState(false)

  const promiseFunctionWrapper = async (...arg: U): Promise<Awaited<T>> => {
    setWait(true)
    const res = await fn(...arg)
    setWait(false)
    return res
  }

  const functionWrapper = (...arg: U): T => {
    setWait(true)
    const res = fn(...arg)
    setWait(false)
    return res
  }

  const isAsync = useMemo<boolean>((): boolean => fn.constructor.name === "AsyncFunction", [])

  return {
    waiting: () => waiting,
    fn: isAsync ? promiseFunctionWrapper : functionWrapper
  }
}