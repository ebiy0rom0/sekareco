import { useState, useEffect } from 'react'
import { ClearStatus } from '../components/clear.tsx'

type Record = {
  [n: number]: typeof ClearStatus[keyof typeof ClearStatus][]
}

// @debug
const [n, c, f, a] = Object.values(ClearStatus)

export const useRecord = (personId: number) => {
  const [ recordList, setRecordList ] = useState<Record>({})

  useEffect(() =>
    // TODO: fetch
    setRecordList({
      1: [a,a,a,a,c],
      2: [a,a,f,f,c],
      3: [n,n,f,f,c]
    }
  ), [])

  const getMusicRecord = (musicId: number) => recordList[musicId] ?? []

  return { getMusicRecord }
}