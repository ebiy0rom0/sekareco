/// <reference types="./../types/index.d.ts" />
import { useState, useEffect, useCallback } from "react"
import { DifficultyValues } from "./useMusic.ts"

// custom hook
export const useRecord = (personId: number) => {
  const [ recordList, setRecordList ] = useState<P_Record.Record<ClearStatusValues>>({})

  useEffect(() =>
    // TODO: fetch
    setRecordList({
       1: [a,a,f,f,f],
       2: [n,n,f,a,f],
       3: [a,a,f,f,f],
       4: [a,a,f,f,f],
       5: [a,a,a,a,a],
       6: [a,a,f,f,f],
       7: [n,a,a,f,f],
       8: [a,a,a,a,a],
       9: [a,a,a,f,f],
      10: [a,a,f,f,f],
      11: [n,n,f,a,f],
      12: [n,a,f,f,f],
      13: [a,a,a,a,f],
      14: [a,a,a,a,f],
      15: [a,a,a,a,f],
      16: [a,a,f,f,f],
      17: [a,a,f,f,f],
      18: [a,a,a,a,f],
      19: [a,a,f,f,c],
      20: [n,a,n,f,f],
      21: [a,a,f,f,f],
      22: [a,a,f,f,f],
      23: [a,a,a,a,f],
      24: [a,a,a,a,c],
      25: [a,a,f,f,c],
      26: [n,a,f,f,c],
      27: [a,a,a,f,c],
      28: [a,a,f,f,c],
    }
  ), [])

  const getMusicRecord = useCallback((musicId: number) => recordList[musicId] ?? [], [recordList])

  const increment = (musicId: number, difficulty: DifficultyValues) => {
    const cp = { ...recordList }
    cp[musicId][difficulty] = next(cp[musicId][difficulty]) as ClearStatusValues
    setRecordList(cp)
  }
  const decrement = (musicId: number, difficulty: DifficultyValues) => {
    const cp = { ...recordList }
    cp[musicId][difficulty] = prev(cp[musicId][difficulty]) as ClearStatusValues
    setRecordList(cp)
  }

  const getIndex = (status: number) => {
    const keyList = Object.keys(ClearStatusList)
    const findKey = Object.entries(ClearStatusList).find(([_, v]) => v === status)?.[0]
    return keyList.findIndex(k => k === findKey)
  }
  const length = Object.keys(ClearStatusList).length
  const next = (status: number) => (length + getIndex(status) + 1) % length
  const prev = (status: number) => (length + getIndex(status) - 1) % length

  return {
    getMusicRecord,
    increment,
    decrement
  }
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
