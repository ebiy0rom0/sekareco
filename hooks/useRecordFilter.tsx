import { useState } from 'react'
import { DifficultyList } from './useMusic.tsx'

// custom hook
export const useRecordFilter = () => {
  const [ difficulty, setDifficulty ] = useState<number[]>(Object.values(DifficultyList))

  // setter wrap
  // for use input element
  const changeDifficulty = (checked: string) => {
    const checkedNum = parseInt(checked)
    const newFilter = isFiltered(checkedNum) ? difficulty.filter(d => d != checkedNum) : [...difficulty, checkedNum]
    setDifficulty(newFilter.sort())
  }
  // check already filterd
  const isFiltered = (test: number) => difficulty.some(d => d == test)

  return {
    difficulty: () => difficulty,
    changeDifficulty,
    isFiltered
  }
}

