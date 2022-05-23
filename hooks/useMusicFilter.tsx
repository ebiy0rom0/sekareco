import { useState, useEffect } from 'react'
import { useMusic, DifficultyList } from './useMusic.tsx'
import { useRange } from './useRange.tsx'

export const useMusicFilter = () => {
  const [ targetDifficulty, setTargetDifficulty ] = useState<number>(DifficultyList.MASTER)
  const { levelUpper, levelLower, musicList } = useMusic()
  const {
    range: lowerFilter,
    changeRange: changeLower
  } = useRange(levelLower(targetDifficulty))

  const {
    range: upperFilter,
    changeRange: changeUpper
  } = useRange(levelUpper(targetDifficulty))

  useEffect(() => {
    changeLowerFilter(levelLower(targetDifficulty))
    changeUpperFilter(levelUpper(targetDifficulty))
  }, [musicList(), targetDifficulty])

  // setter wrap
  const changeTargetDifficulty = (val: number) => {
    // select "master", if out of range
    const newVal = Object.values(DifficultyList).some(d => d == val) ? val : DifficultyList.MASTER
    setTargetDifficulty(newVal)
  }
  const changeLowerFilter = (val: number) => changeLower(val, levelLower(targetDifficulty), upperFilter())
  const changeUpperFilter = (val: number) => changeUpper(val, lowerFilter(), levelUpper(targetDifficulty))

  // check within filter range
  const isLevelWithinRange = (level: number) => lowerFilter() <= level && level <= upperFilter()

  // check filtering target
  const isFilteringMusic = (level: number[]) => level.some(l => isLevelWithinRange(l))

  // level filter
  const getFilteredMusicList = (difficulty: number) =>
    musicList().filter(m => isFilteringMusic(m.level.filter((_, index) => index == difficulty)))

  return {
    changeTargetDifficulty,
    targetDifficulty: () => targetDifficulty,
    lowerFilter,
    upperFilter,
    changeUpperFilter,
    changeLowerFilter,
    getFilteredMusicList
  }
}

type T = typeof DifficultyList[keyof typeof DifficultyList]