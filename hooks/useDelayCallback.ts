import { useState, useEffect, useCallback } from "react"

export const useDelayCallback = (delay: number, callback: () => void) => {
  const [ trigger, setTrigger ] = useState(false)
  const [ id, setId ] = useState(0)

  const start = () => setTrigger(true)
  const stop = () => setTrigger(false)

  const wrapCallback = () => {
    callback()
    setId(0)
    stop()    // re enable trigger
  }

  useEffect(() => {
    if (trigger) {
      const timeoutId = setTimeout(wrapCallback, delay)
      setId(timeoutId)
    } else if (id > 0)  {
      // stop callback if before exec
      clearTimeout(id)
      setId(0)
    }
  }, [trigger])

  return { start, stop }
}