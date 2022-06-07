/// <reference types="./../types/index.d.ts" />
import { useEffect } from "react"
import { apiFactory } from "../api/apiFactory.ts"
import { useSessionStorage } from "../utils/useSessionStorage.ts"

// custom hook
export const useMusic = () => {
  const repositoryKey = "music"
  const [ musicList, setMusicList ] = useSessionStorage<M_Music.Music[]>(repositoryKey, [])

  // TODO: fetch
  useEffect(() => {
    if (musicList().length > 0) return

    // do fetch the only first time in same session
    (async () => {
      const fetchList = await apiFactory.get(repositoryKey).getMusicList()
      setMusicList(fetchList)
    })()
  }, [])

  // all music level array
  const getLevelListByDifficulty = (difficulty: number) => [...musicList().map(m => m.level[difficulty])]

  // exist level min & max
  const getLevelUpper = (difficulty: number) => Math.max(  0, ...getLevelListByDifficulty(difficulty))
  const getLevelLower = (difficulty: number) => Math.min(100, ...getLevelListByDifficulty(difficulty))

  return {
    levelUpper: getLevelUpper,
    levelLower: getLevelLower,
    musicList
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
