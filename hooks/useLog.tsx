import { useState } from "react"

// custom hook
export const useLog = () => {
  const [ logList, setLogList ] = useState<string[]>([])

  const setLog = (log: string) => {
    const cp = [...logList, JSON.stringify(log)]
    return setLogList(cp)
  }

  const renderLog = () => (
    <ol className="log">
      { logList.reverse().map((log, i) => (<li key={i.toString()}>{ log }</li>)) }
    </ol>
  )

  return {
    setLog,
    renderLog
  }
}