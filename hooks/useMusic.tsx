/// <reference types="./../types/index.d.ts" />
import { useState, useEffect } from "react"

// custom hook
export const useMusic = () => {
  const [ musicList, setMusicList ] = useState<M_Music.Music[]>([])

  // TODO: fetch
  useEffect(() => setMusicList([
    { id:  1, title: "ECHO",               url: "/assets/logo.svg", level: [6, 12, 16, 23, 26] },
    { id:  2, title: "フラジール",            url: "/assets/logo.svg", level: [6, 11, 17, 24, 27] },
    { id:  3, title: "Just Be Friends",    url: "/assets/logo.svg", level: [6, 11, 16, 23, 27] },
    { id:  4, title: "幽霊東京",             url: "/assets/logo.svg", level: [7, 13, 17, 24, 27] },
    { id:  5, title: "群青讃歌",             url: "/assets/logo.svg", level: [7, 13, 17, 24, 27] },
    { id:  6, title: "drop pop candy",     url: "/assets/logo.svg", level: [6, 12, 17, 25, 28] },
    { id:  7, title: "威風堂々",             url: "/assets/logo.svg", level: [6, 12, 17, 24, 28] },
    { id:  8, title: "トラフィック・ジャム",    url: "/assets/logo.svg", level: [6, 13, 18, 24, 28] },
    { id:  9, title: "ガランド",             url: "/assets/logo.svg", level: [7, 13, 18, 24, 28] },
    { id: 10, title: "Forward",            url: "/assets/logo.svg", level: [6, 11, 16, 24, 28] },
    { id: 11, title: "Beat Eater",         url: "/assets/logo.svg", level: [6, 11, 17, 25, 28] },
    { id: 12, title: "ミライ",               url: "/assets/logo.svg", level: [6, 12, 18, 24, 28] },
    { id: 13, title: "踊",                  url: "/assets/logo.svg", level: [6, 13, 18, 26, 29] },
    { id: 14, title: "雨とペトラ",            url: "/assets/logo.svg", level: [9, 12, 18, 25, 29] },
    { id: 15, title: "PaⅢ.SENSATION",      url: "/assets/logo.svg", level: [8, 12, 17, 24, 29] },
    { id: 16, title: "夜に駆ける",            url: "/assets/logo.svg", level: [6, 11, 18, 25, 29] },
    { id: 17, title: "Ready Steady",       url: "/assets/logo.svg", level: [5, 10, 16, 25, 29] },
    { id: 18, title: "シネマ",               url: "/assets/logo.svg", level: [6, 12, 18, 24, 29] },
    { id: 19, title: "Flyer!",             url: "/assets/logo.svg", level: [9, 12, 18, 24, 29] },
    { id: 20, title: "月光",                url: "/assets/logo.svg", level: [5, 12, 18, 25, 29] },
    { id: 21, title: "劣等上等",             url: "/assets/logo.svg", level: [7, 12, 18, 25, 30] },
    { id: 22, title: "夜咄ディセイブ",         url: "/assets/logo.svg", level: [8, 14, 19, 26, 30] },
    { id: 23, title: "悪魔の踊り方",          url: "/assets/logo.svg", level: [5, 12, 19, 26, 30] },
    { id: 24, title: "サラマンダー",          url: "/assets/logo.svg", level: [8, 12, 18, 25, 30] },
    { id: 25, title: "RAD DOGS",           url: "/assets/logo.svg", level: [6, 12, 18, 26, 30] },
    { id: 26, title: "オルダーエゴ",          url: "/assets/logo.svg", level: [8, 12, 17, 26, 31] },
    { id: 27, title: "ドクター＝ファンクビート", url: "/assets/logo.svg", level: [8, 13, 19, 27, 32] },
    { id: 28, title: "チルドレンレコード",      url: "/assets/logo.svg", level: [9, 14, 19, 27, 32] },
  ]), [])

  // all music level array
  const getLevelListByDifficulty = (difficulty: number) => Array<number>(0).concat(...musicList.map(m => m.level[difficulty]))

  // exist level min & max
  const getLevelUpper = (difficulty: number) => Math.max(0, ...getLevelListByDifficulty(difficulty))
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
