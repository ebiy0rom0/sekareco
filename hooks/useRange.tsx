import { useState } from 'react'

// custom hook
export const useRange = (init: number) => {
  const [ range, setRange ] = useState<number>(init)

  // setter wrap
  const changeRange = (val: number, lower: number, upper: number) => {
    // rounding to args range
    const newVal = val < lower ? lower : val > upper ? upper : val
    setRange(newVal)
  }

  return {
    range: () => range,
    changeRange
  }
}