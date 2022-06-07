/// <reference types="./../../types/index.d.ts" />
import { apiHandler } from "../handler/apiHandler.ts"

export const musicRepository = {
  getMusicList: async () => {
    // const json = await apiHandler.get("music/").json<string>()
    // return JSON.parse(json) as M_Music.Music[]

    // @debug data
    return [
      { id:  1, title: "ECHO",               url: "/assets/jacket_001.png", level: [6, 12, 16, 23, 26] },
      { id:  2, title: "フラジール",            url: "/assets/jacket_002.png", level: [6, 11, 17, 24, 27] },
      { id:  3, title: "Just Be Friends",    url: "/assets/jacket_003.png", level: [6, 11, 16, 23, 27] },
      { id:  4, title: "幽霊東京",             url: "/assets/jacket_004.png", level: [7, 13, 17, 24, 27] },
      { id:  5, title: "群青讃歌",             url: "/assets/jacket_005.png", level: [7, 13, 17, 24, 27] },
      { id:  6, title: "drop pop candy",     url: "/assets/jacket_006.png", level: [6, 12, 17, 25, 28] },
      { id:  7, title: "威風堂々",             url: "/assets/jacket_007.png", level: [6, 12, 17, 24, 28] },
      { id:  8, title: "トラフィック・ジャム",    url: "/assets/jacket_008.png", level: [6, 13, 18, 24, 28] },
      { id:  9, title: "ガランド",             url: "/assets/jacket_009.png", level: [7, 13, 18, 24, 28] },
      { id: 10, title: "Forward",            url: "/assets/jacket_010.png", level: [6, 11, 16, 24, 28] },
      { id: 11, title: "Beat Eater",         url: "/assets/jacket_011.png", level: [6, 11, 17, 25, 28] },
      { id: 12, title: "ミライ",               url: "/assets/jacket_012.png", level: [6, 12, 18, 24, 28] },
      { id: 13, title: "踊",                  url: "/assets/jacket_013.png", level: [6, 13, 18, 26, 29] },
      { id: 14, title: "雨とペトラ",            url: "/assets/jacket_014.png", level: [9, 12, 18, 25, 29] },
      { id: 15, title: "PaⅢ.SENSATION",      url: "/assets/jacket_015.png", level: [8, 12, 17, 24, 29] },
      { id: 16, title: "夜に駆ける",            url: "/assets/jacket_016.png", level: [6, 11, 18, 25, 29] },
      { id: 17, title: "Ready Steady",       url: "/assets/jacket_017.png", level: [5, 10, 16, 25, 29] },
      { id: 18, title: "シネマ",               url: "/assets/jacket_018.png", level: [6, 12, 18, 24, 29] },
      { id: 19, title: "Flyer!",             url: "/assets/jacket_019.png", level: [9, 12, 18, 24, 29] },
      { id: 20, title: "月光",                url: "/assets/jacket_020.png", level: [5, 12, 18, 25, 29] },
      { id: 21, title: "劣等上等",             url: "/assets/jacket_021.png", level: [7, 12, 18, 25, 30] },
      { id: 22, title: "夜咄ディセイブ",         url: "/assets/jacket_022.png", level: [8, 14, 19, 26, 30] },
      { id: 23, title: "悪魔の踊り方",          url: "/assets/jacket_023.png", level: [5, 12, 19, 26, 30] },
      { id: 24, title: "サラマンダー",          url: "/assets/jacket_024.png", level: [8, 12, 18, 25, 30] },
      { id: 25, title: "RAD DOGS",           url: "/assets/jacket_025.png", level: [6, 12, 18, 26, 30] },
      { id: 26, title: "オルダーエゴ",          url: "/assets/jacket_026.png", level: [8, 12, 17, 26, 31] },
      { id: 27, title: "ドクター＝ファンクビート", url: "/assets/jacket_027.png", level: [8, 13, 19, 27, 32] },
      { id: 28, title: "チルドレンレコード",      url: "/assets/jacket_028.png", level: [9, 14, 19, 27, 32] },
      { id: 999, title: "みっくみくにしてあげる♪【してやんよ】", url: "/assets/logo.svg", level: [7, 12, 17, 24, 28] },
    ]
  }
}