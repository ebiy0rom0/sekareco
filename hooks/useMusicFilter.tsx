/// <reference types="./../types/index.d.ts" />
import { useState, useEffect } from 'react'
import { useMusic, DifficultyList } from './useMusic.tsx'
import { useRange } from './useRange.tsx'

// custom hook
export const useMusicFilter = (musicList: M_Music.Music[]) => {
  const [ difficulty, setDifficulty ] = useState<number>(DifficultyList.MASTER)
  const { levelUpper, levelLower } = useMusic()
  const {
    range: lowerFilter,
    changeRange: changeLower
  } = useRange(0)
  const {
    range: upperFilter,
    changeRange: changeUpper
  } = useRange(0)

  // setter wrap
  const changeDifficulty = (val: string) => {
    const cast = parseInt(val)
    // select "master", if out of range
    const newVal = Object.values(DifficultyList).some(d => d === cast) ? cast : DifficultyList.MASTER
    setDifficulty(newVal)
  }
  const changeLowerFilter = (val: string) => changeLower(parseInt(val), levelLower(difficulty), upperFilter())
  const changeUpperFilter = (val: string) => changeUpper(parseInt(val), lowerFilter(), levelUpper(difficulty))

  // check within filter range
  const isLevelWithinRange = (level: number) => lowerFilter() <= level && level <= upperFilter()

  // level filter
  const getFilteredMusicList = () => musicList.filter(m => isLevelWithinRange(m.level[difficulty]))

  useEffect(() => {
    changeLower(levelLower(difficulty), levelLower(difficulty), levelUpper(difficulty))
    changeUpper(levelUpper(difficulty), levelLower(difficulty), levelUpper(difficulty))
  }, [musicList, difficulty])

  return {
    difficulty: () => difficulty,
    lowerFilter,
    upperFilter,
    changeDifficulty,
    changeUpperFilter,
    changeLowerFilter,
    getFilteredMusicList
  }
}
