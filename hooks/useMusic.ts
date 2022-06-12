/// <reference types="./../types/index.d.ts" />
import { useState, useEffect } from "react"
import { apiFactory } from "../api/apiFactory.ts"

// custom hook
export const useMusic = () => {
  const [ musicList, setMusicList ] = useState<M_Music.Music[]>([])

  useEffect(() => {
    (async () => {
      const list = await apiFactory.get("music").getMusicList()
      setMusicList(list)
    })()
  }, [])

  // all music level array
  const getLevelListByDifficulty = (difficulty: number) => [...musicList.map(m => m.level[difficulty])]

  // exist level min & max
  const getLevelUpper = (difficulty: number) => Math.max(  0, ...getLevelListByDifficulty(difficulty))
  const getLevelLower = (difficulty: number) => Math.min(100, ...getLevelListByDifficulty(difficulty))

  return {
    levelUpper: getLevelUpper,
    levelLower: getLevelLower,
    musicList: () => musicList
  }
}

export const DifficultyList = {
  EASY: 0,
  NORMAL: 1,
  HARD: 2,
  EXPERT: 3,
  MASTER: 4
} as const

export type DifficultyValues = typeof DifficultyList[keyof typeof DifficultyList]
