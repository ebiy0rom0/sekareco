import React from 'react'
import { useState } from 'react'

export const useLog = () => {
  const [ logList, setLogList ] = useState<string[]>([])

  const setLog = (log: string) => {
    console.log(log)

    const cp = [...logList, JSON.stringify(log)]
    return setLogList(cp)
  }

  const renderLog = () => (
    <ol>
      { logList.map((log, i) => (<li key={i.toString()}>{ log }</li>)) }
    </ol>
  )

  return {
    setLog,
    renderLog
  }
}