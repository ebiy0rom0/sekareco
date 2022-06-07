/// <reference types="./../types/index.d.ts" />
import { useEffect, useCallback } from "react"
import { DifficultyValues } from "./useMusic.ts"
import { apiFactory } from "../api/apiFactory.ts"
import { useSessionStorage } from "./../utils/useSessionStorage.ts"

// custom hook
export const useRecord = (personId: number) => {
  const repositoryKey = "record"
  const [ recordList, setRecordList ] = useSessionStorage<P_Record.Record<ClearStatusValues>>(repositoryKey, {})

  useEffect(() => {
    if (Object.keys(recordList()).length > 0) return

    // do fetch the only first time in same session
    (async () => {
      const fetchList = await apiFactory.get(repositoryKey).getMyRecord(personId)
      setRecordList(fetchList)
    })()
  }, [])

  const getMusicRecord = useCallback((musicId: number) => recordList()[musicId] ?? [], [recordList])

  const increment = (musicId: number, difficulty: DifficultyValues) => {
    const copyList = { ...recordList() }
    copyList[musicId][difficulty] = next(copyList[musicId][difficulty])
    setRecordList(copyList)
  }
  const decrement = (musicId: number, difficulty: DifficultyValues) => {
    const copyList = { ...recordList() }
    copyList[musicId][difficulty] = prev(copyList[musicId][difficulty])
    setRecordList(copyList)
  }

  const getIndex = (status: number) => {
    const keyList = Object.keys(ClearStatusList)
    const findKey = Object.entries(ClearStatusList).find(([_, v]) => v === status)?.[0]
    return keyList.findIndex(k => k === findKey)
  }
  const length = Object.keys(ClearStatusList).length
  const next = (status: number) => (length + getIndex(status) + 1) % length as ClearStatusValues
  const prev = (status: number) => (length + getIndex(status) - 1) % length as ClearStatusValues

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
