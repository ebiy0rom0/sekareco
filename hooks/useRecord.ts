/// <reference types="./../types/index.d.ts" />
import { useState, useEffect, useCallback } from "react"
import { DifficultyValues } from "./useMusic.ts"
import { apiFactory } from "../api/apiFactory.ts"
import { useObjectCompare } from "../utils/useObjectCompare.ts"
import { useDelayCallback } from "./useDelayCallback.ts"

// custom hook
export const useRecord = (personId: number) => {
  const [ recordList, setRecordList ] = useState<P_Record.Record<ClearStatusValues>>({})
  const [ compareList, setCompareList ] = useState<typeof recordList>({})
  const { difference } = useObjectCompare(recordList, compareList)

  const changeCompareList = (musicId: number, status: ClearStatusValues[]) => {
    const copyList = { ...compareList }
    copyList[musicId] = status
    setCompareList(copyList)
  }
  // auto saving 30 sec after at first record update
  const { start, stop } = useDelayCallback(DELAY_AUTO_SAVE, () => {alert('auto save')})

  // const autoSaving = async () => {
  //   const result = await apiFactory.get("record").registRecord(personId, 1, [])
  //   changeCompareList(1, result)
  // }
  // const { start, stop } = useDelayCallback(DELAY_AUTO_SAVE, (async () => await autoSaving()))

  // [first time]
  useEffect(() => {
    (async () => {
      const list = await apiFactory.get("record").getMyRecord(personId)
      setRecordList(list)
      setCompareList(list)
    })()
  }, [])

  // auto saving
  useEffect(() => difference() ? start() : stop(), [difference])

  // select one music record
  const getMusicRecord = useCallback((musicId: number) => recordList[musicId] ?? [], [recordList])

  //
  const increment = (musicId: number, difficulty: DifficultyValues) => {
    const copyList = { ...recordList }
    copyList[musicId][difficulty] = next(copyList[musicId][difficulty]) as ClearStatusValues
    setRecordList(copyList)
  }
  const decrement = (musicId: number, difficulty: DifficultyValues) => {
    const copyList = { ...recordList }
    copyList[musicId][difficulty] = prev(copyList[musicId][difficulty]) as ClearStatusValues
    setRecordList(copyList)
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

const DELAY_AUTO_SAVE = 10 * 1000

export const ClearStatusList = {
  NOPLAY: 0,
  CLEAR:  1,
  FULL_COMBO: 2,
  ALL_PERFECT: 3
} as const

export type ClearStatusValues = typeof ClearStatusList[keyof typeof ClearStatusList]

// @debug
const [n, c, f, a] = Object.values(ClearStatusList)
