import React, { useState } from "react"

export const useInput = () => {
  const [ value, setValue ] = useState<string>("")

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return {
    value: () => value,
    handle
  }
}