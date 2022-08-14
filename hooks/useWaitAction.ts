import { useState, useMemo } from "react"

export const useWaitAction = <T extends unknown>(fn: (...arg: any[]) => T) => {
  const [ waiting, setWait ] = useState(false)

  const promiseFunctionWrapper = async (...arg: any[]): Promise<Awaited<T>> => {
    setWait(true)
    const res = await fn(...arg)
    setWait(false)
    return res
  }

  const functionWrapper = (...arg: any[]): T => {
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