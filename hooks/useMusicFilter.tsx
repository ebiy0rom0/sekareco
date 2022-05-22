import { useState, useEffect } from 'react'
import { useMusic, DifficultyList } from './useMusic.tsx'

export const useMusicFilter = () => {
  const [ levelUpperFilter, setLevelUpper ] = useState(0)
  const [ levelLowerFilter, setLevelLower ] = useState(0)
  const [ difficultyFilter ] = useState<T[]>(Object.values(DifficultyList))

  const { levelUpper, levelLower, musicList } = useMusic()

  useEffect(() => {
    setLevelUpper(levelUpper())
    setLevelLower(levelLower())
  }, [musicList()])

    // setter wrap
    const changeUpperFilter = (val: number) => {
      // rounding to upper level
      const newVal = val > levelUpper() ? levelUpper() : val < levelLowerFilter ? levelLowerFilter : val
      setLevelUpper(newVal)
    }
    const changeLowerFilter = (val: number) => {
      // rounding to lower level
      const newVal = val < levelLower() ? levelLower() : val > levelUpperFilter ? levelUpperFilter : val
      setLevelLower(newVal)
    }

    // check within filter range
    const isLevelWithinRange = (level: number) => levelLowerFilter <= level && level <= levelUpperFilter
    // check filtering target
    const isFilteringMusic = (level: number[]) => level.some(l => isLevelWithinRange(l))
    // level filter
    const getFilteredMusicList = () => musicList().filter(m => isFilteringMusic(m.level))

  return {
    diffFilter: () => difficultyFilter,
    changeUpperFilter,
    upperFilter: () => levelUpperFilter,
    changeLowerFilter,
    lowerFilter: () => levelLowerFilter,
    getFilteredMusicList

  }
}

type T = typeof DifficultyList[keyof typeof DifficultyList]