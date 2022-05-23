import { useState } from 'react'
import { DifficultyList } from './useMusic.tsx'

export const useDifficultyFilter = () => {
  const [ difficultyFilter, setDifficultyFilter ] = useState<T[]>(Object.values(DifficultyList))

  // setter wrap
  const changeDifficultyFilter = (difficulty: T) => {
    const newFilter = isFiltered(difficulty) ? difficultyFilter.filter(d => d != difficulty) : [...difficultyFilter, difficulty]
    setDifficultyFilter(newFilter)
  }
  // check already filterd
  const isFiltered = (difficulty: T) => difficultyFilter.some(d => d == difficulty)

  return {
    changeDifficultyFilter,
    isFiltered
  }
}

type T = typeof DifficultyList[keyof typeof DifficultyList]