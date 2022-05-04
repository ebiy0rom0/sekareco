import { useState, useEffect } from 'react'

export const useMusic = () => {
  const [ musicList, setMusicList ] = useState<Music[]>([])
  const [ levelUpperFilter, setLevelUpper ] = useState(0)
  const [ levelLowerFilter, setLevelLower ] = useState(0)
  const [ difficultyFilter ] = useState<T[]>(Object.values(DifficultyList))

  // TODO: fetch
  useEffect(() => setMusicList([
    { id: 1, title: '悪魔の踊り方', url: '/assets/logo.svg', level: [5, 12, 19, 26, 30] },
    { id: 2, title: 'RAD DOGS',  url: '/assets/logo.svg', level: [6, 12, 18, 26, 30] },
    { id: 3, title: 'Flyer!',    url: '/assets/logo.svg', level: [9, 12, 18, 24, 29] }
  ]), [])

  useEffect(() => {
    setLevelUpper(getLevelUpper())
    setLevelLower(getLevelLower())
  }, [musicList])

  // all music level array
  const getAllLevel = () => Array<number>(0).concat(...musicList.map(m => m.level))
  // exist level min & max
  const getLevelUpper = () => Math.max(0, ...getAllLevel())
  const getLevelLower = () => Math.min(100, ...getAllLevel())

  // check within filter range
  const isLevelWithinRange = (level: number) => levelLowerFilter <= level && level <= levelUpperFilter
  // check filtering target
  const isFilteringMusic = (level: number[]) => level.some(l => isLevelWithinRange(l))
  // level filter
  const getFilteredMusicList = () => musicList.filter(m => isFilteringMusic(m.level))

  return {
    difficultyFilter,
    setLevelUpper,
    setLevelLower,
    levelUpper: getLevelUpper(),
    levelLower: getLevelLower(),
    getFilteredMusicList
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

type T = typeof DifficultyList[keyof typeof DifficultyList]