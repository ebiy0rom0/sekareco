import { useState } from "react"

export const useWaitAction = (fn: () => Promise<void>) => {
  const [ waiting, setWait ] = useState(false)

  const functionWrapper = async () => {
    setWait(true)
    await fn()
    setWait(false)
  }

  return {
    waiting: () => waiting,
    fn: functionWrapper
  }
}