/// <reference types="./../types/index.d.ts" />
import { useState, useEffect, useCallback } from 'react'

// custom hook
export const useRecord = (personId: number) => {
  const [ recordList, setRecordList ] = useState<P_Record.Record<ClearStatusValues>>({})

  useEffect(() =>
    // TODO: fetch
    setRecordList({
      1: [a,a,a,a,c],
      2: [a,a,f,f,c],
      3: [n,n,f,f,c]
    }
  ), [])

  const getMusicRecord = useCallback((musicId: number) => recordList[musicId] ?? [], [])

  return { getMusicRecord }
}

export const ClearStatusList = {
  NOPLAY: 0,
  CLEAR:  1,
  FULL_COMBO: 2,
  ALL_PERFECT: 3
} as const

export type ClearStatusValues = typeof ClearStatusList[keyof typeof ClearStatusList]

// @debug
const [n, c, f, a] = Object.values(ClearStatusList)
