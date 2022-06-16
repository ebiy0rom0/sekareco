/// <reference types="./../types/index.d.ts" />
import { useState, useEffect } from "react"
import { DifficultyList } from "./useMusic.ts"
import { useRange } from "./useRange.ts"

// custom hook
export const useMusicFilter = (
  musicList: M_Music.Music[],
  levelLower: (n: number) => number,
  levelUpper: (n: number) => number
) => {
  const [ difficulty, setDifficulty ] = useState<number>(DifficultyList.MASTER)
  const {
    range: lowerFilter,
    changeRange: changeLower
  } = useRange(0)
  const {
    range: upperFilter,
    changeRange: changeUpper
  } = useRange(0)

  // setter wrap
  const changeDifficulty = (input: string) => {
    const inputNum = parseInt(input)
    // select "master", if out of range
    const newVal = Object.values(DifficultyList).some(d => d === inputNum) ? inputNum : DifficultyList.MASTER
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
