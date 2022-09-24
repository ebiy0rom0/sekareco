/// <reference types="~/types/index.d.ts" />
import { useState, useEffect } from "react"
import { apiFactory } from "~/api/apiFactory.ts"

// custom hook
export const useMusic = () => {
  const [ music, setMusic ] = useState<M_Music.Music[]>([])

  useEffect(() => {
    // master data fetch only server musicID
    // if (typeof window !== "undefined") return

    // (async () => {
    //   const list = await apiFactory.get("music").getMusicList()
    //   setMusic(list)
    // })()
  }, [])
  useEffect(() => setMusic([
    { musicID:  1, artistID: 4, musicName: "ECHO",               jacketUrl: "/assets/jacket_001.png", level: [6, 12, 16, 23, 26] },
    { musicID:  2, artistID: 4, musicName: "フラジール",            jacketUrl: "/assets/jacket_002.png", level: [6, 11, 17, 24, 27] },
    { musicID:  3, artistID: 4, musicName: "Just Be Friends",    jacketUrl: "/assets/jacket_003.png", level: [6, 11, 16, 23, 27] },
    { musicID:  4, artistID: 4, musicName: "幽霊東京",             jacketUrl: "/assets/jacket_004.png", level: [7, 13, 17, 24, 27] },
    { musicID:  5, artistID: 4, musicName: "群青讃歌",             jacketUrl: "/assets/jacket_005.png", level: [7, 13, 17, 24, 27] },
    { musicID:  6, artistID: 4, musicName: "drop pop candy",     jacketUrl: "/assets/jacket_006.png", level: [6, 12, 17, 25, 28] },
    { musicID:  7, artistID: 4, musicName: "威風堂々",             jacketUrl: "/assets/jacket_007.png", level: [6, 12, 17, 24, 28] },
    { musicID:  8, artistID: 4, musicName: "トラフィック・ジャム",    jacketUrl: "/assets/jacket_008.png", level: [6, 13, 18, 24, 28] },
    { musicID:  9, artistID: 4, musicName: "ガランド",             jacketUrl: "/assets/jacket_009.png", level: [7, 13, 18, 24, 28] },
    { musicID: 10, artistID: 4, musicName: "Forward",            jacketUrl: "/assets/jacket_010.png", level: [6, 11, 16, 24, 28] },
    { musicID: 11, artistID: 4, musicName: "Beat Eater",         jacketUrl: "/assets/jacket_011.png", level: [6, 11, 17, 25, 28] },
    { musicID: 12, artistID: 4, musicName: "ミライ",               jacketUrl: "/assets/jacket_012.png", level: [6, 12, 18, 24, 28] },
    { musicID: 13, artistID: 4, musicName: "踊",                  jacketUrl: "/assets/jacket_013.png", level: [6, 13, 18, 26, 29] },
    { musicID: 14, artistID: 4, musicName: "雨とペトラ",            jacketUrl: "/assets/jacket_014.png", level: [9, 12, 18, 25, 29] },
    { musicID: 15, artistID: 4, musicName: "PaⅢ.SENSATION",      jacketUrl: "/assets/jacket_015.png", level: [8, 12, 17, 24, 29] },
    { musicID: 16, artistID: 4, musicName: "夜に駆ける",            jacketUrl: "/assets/jacket_016.png", level: [6, 11, 18, 25, 29] },
    { musicID: 17, artistID: 4, musicName: "Ready Steady",       jacketUrl: "/assets/jacket_017.png", level: [5, 10, 16, 25, 29] },
    { musicID: 18, artistID: 4, musicName: "シネマ",               jacketUrl: "/assets/jacket_018.png", level: [6, 12, 18, 24, 29] },
    { musicID: 19, artistID: 4, musicName: "Flyer!",             jacketUrl: "/assets/jacket_019.png", level: [9, 12, 18, 24, 29] },
    { musicID: 20, artistID: 4, musicName: "月光",                jacketUrl: "/assets/jacket_020.png", level: [5, 12, 18, 25, 29] },
    { musicID: 21, artistID: 4, musicName: "劣等上等",             jacketUrl: "/assets/jacket_021.png", level: [7, 12, 18, 25, 30] },
    { musicID: 22, artistID: 4, musicName: "夜咄ディセイブ",         jacketUrl: "/assets/jacket_022.png", level: [8, 14, 19, 26, 30] },
    { musicID: 23, artistID: 4, musicName: "悪魔の踊り方",          jacketUrl: "/assets/jacket_023.png", level: [5, 12, 19, 26, 30] },
    { musicID: 24, artistID: 4, musicName: "サラマンダー",          jacketUrl: "/assets/jacket_024.png", level: [8, 12, 18, 25, 30] },
    { musicID: 25, artistID: 4, musicName: "RAD DOGS",           jacketUrl: "/assets/jacket_025.png", level: [6, 12, 18, 26, 30] },
    { musicID: 26, artistID: 4, musicName: "オルダーエゴ",          jacketUrl: "/assets/jacket_026.png", level: [8, 12, 17, 26, 31] },
    { musicID: 27, artistID: 4, musicName: "ドクター＝ファンクビート", jacketUrl: "/assets/jacket_027.png", level: [8, 13, 19, 27, 32] },
    { musicID: 28, artistID: 4, musicName: "チルドレンレコード",      jacketUrl: "/assets/jacket_028.png", level: [9, 14, 19, 27, 32] },
    { musicID: 999, artistID: 4, musicName: "みっくみくにしてあげる♪【してやんよ】", jacketUrl: "/assets/logo.svg", level: [7, 12, 17, 24, 28] },
  ]), [])
  // all music level array
  const getLevelListByDifficulty = (difficulty: number) => [...music.map(m => m.level[difficulty])]

  // exist level min & max
  const getLevelUpper = (difficulty: number) => Math.max(  0, ...getLevelListByDifficulty(difficulty))
  const getLevelLower = (difficulty: number) => Math.min(100, ...getLevelListByDifficulty(difficulty))

  return {
    levelUpper: getLevelUpper,
    levelLower: getLevelLower,
    music: () => music
  }
}

