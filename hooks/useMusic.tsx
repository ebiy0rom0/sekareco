import { useState, useEffect } from 'react'

export const useMusic = () => {
  const [ musicList, setMusicList ] = useState<Music[]>([])

  // TODO: fetch
  useEffect(() => setMusicList([
    { id: 1, title: '悪魔の踊り方', url: '/assets/logo.svg', level: [5, 12, 19, 26, 30] },
    { id: 2, title: 'RAD DOGS',  url: '/assets/logo.svg', level: [6, 12, 18, 26, 30] },
    { id: 3, title: 'Flyer!',    url: '/assets/logo.svg', level: [9, 12, 18, 24, 29] }
  ]), [])

  // all music level array
  const getLevelListByDifficulty = (difficulty: number) =>
      Array<number>(0).concat(...musicList.map(m => m.level[difficulty]))

  // exist level min & max
  const getLevelUpper = (difficulty: number) => Math.max(0, ...getLevelListByDifficulty(difficulty))
  const getLevelLower = (difficulty: number) => Math.min(100, ...getLevelListByDifficulty(difficulty))

  return {
    levelUpper: getLevelUpper,
    levelLower: getLevelLower,
    musicList: () => musicList
  }
}

type Music = {
  id: number
  title: string
  url: string
  level: number[]
}

export const DifficultyList = {
  EASY:   0,
  NORMAL: 1,
  HARD:   2,
  EXPERT: 3,
  MASTER: 4
} as const

