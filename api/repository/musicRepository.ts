export const musicRepository = {
  getMusicList: async () => {
    // when successfully get, returns music master data
    // const json = await getApiHandler()
    //   .get("musics")
    //   .json<M_Music.Music[]>()
    //   .catch<M_Music.Music[]>((_) => []);

    // return json;
    console.log("get music list");
    return await musictest;
  },
  getGroupList: async () => {
    // const json = await getApiHandler()
    //   .get("musics")
    //   .json<M_Music.Music[]>()
    //   .catch<M_Music.Music[]>((_) => []);

    // return json;
    console.log("get group list");
    return await grouptest;
  },
};

const musictest: Music[] = [
  {
    musicID: 67,
    groupID: 4,
    title: "ECHO",
    jacketUrl: "/jacket/jacket_0067.png",
    level: [6, 12, 16, 23, 26],
    notes: [157, 279, 404, 659, 805],
  },
  {
    musicID: 15,
    groupID: 4,
    title: "フラジール",
    jacketUrl: "/jacket/jacket_0015.png",
    level: [6, 11, 17, 24, 27],
    notes: [108, 377, 669, 863, 1040],
  },
  {
    musicID: 31,
    groupID: 4,
    title: "Just Be Friends",
    jacketUrl: "/jacket/jacket_0031.png",
    level: [6, 11, 16, 23, 27],
    notes: [148, 410, 679, 811, 989],
  },
  {
    musicID: 95,
    groupID: 4,
    title: "幽霊東京",
    jacketUrl: "/jacket/jacket_0095.png",
    level: [7, 13, 17, 24, 27],
    notes: [184, 375, 595, 904, 1053],
  },
  {
    musicID: 208,
    groupID: 4,
    title: "街",
    jacketUrl: "/jacket/jacket_0208.png",
    level: [6, 12, 16, 23, 27],
    notes: [206, 288, 422, 668, 769],
  },
  {
    musicID: 221,
    groupID: 4,
    title: "虚ろを扇ぐ",
    jacketUrl: "/jacket/jacket_0221.png",
    level: [5, 11, 17, 23, 27],
    notes: [320, 455, 677, 908, 1112],
  },
  {
    musicID: 119,
    groupID: 7,
    title: "群青讃歌",
    jacketUrl: "/jacket/jacket_0119.png",
    level: [7, 13, 17, 24, 27],
    notes: [199, 344, 475, 711, 833],
  },
  {
    musicID: 78,
    groupID: 4,
    title: "drop pop candy",
    jacketUrl: "/jacket/jacket_0078.png",
    level: [6, 12, 17, 25, 28],
    notes: [156, 322, 546, 773, 902],
  },
  {
    musicID: 85,
    groupID: 4,
    title: "威風堂々",
    jacketUrl: "/jacket/jacket_0085.png",
    level: [6, 12, 17, 24, 28],
    notes: [188, 326, 604, 975, 1166],
  },
  {
    musicID: 104,
    groupID: 4,
    title: "トラフィック・ジャム",
    jacketUrl: "/jacket/jacket_0104.png",
    level: [6, 13, 18, 24, 28],
    notes: [177, 371, 638, 896, 1089],
  },
  {
    musicID: 152,
    groupID: 4,
    title: "ガランド",
    jacketUrl: "/jacket/jacket_0152.png",
    level: [7, 13, 18, 24, 28],
    notes: [157, 279, 404, 761, 943],
  },
  {
    musicID: 198,
    groupID: 4,
    title: "阿吽のビーツ",
    jacketUrl: "/jacket/jacket_0198.png",
    level: [6, 13, 18, 23, 28],
    notes: [203, 365, 588, 802, 918],
  },
  {
    musicID: 58,
    groupID: 4,
    title: "Forward",
    jacketUrl: "/jacket/jacket_0058.png",
    level: [6, 11, 16, 24, 28],
    notes: [205, 350, 557, 659, 805],
  },
  {
    musicID: 106,
    groupID: 4,
    title: "Beat Eater",
    jacketUrl: "/jacket/jacket_0106.png",
    level: [6, 11, 17, 25, 28],
    notes: [118, 251, 481, 772, 798],
  },
  {
    musicID: 147,
    groupID: 4,
    title: "ミライ",
    jacketUrl: "/jacket/jacket_0147.png",
    level: [6, 12, 18, 24, 28],
    notes: [184, 419, 662, 1017, 1281],
  },
  {
    musicID: 160,
    groupID: 4,
    title: "踊",
    jacketUrl: "/jacket/jacket_0160.png",
    level: [6, 13, 18, 26, 29],
    notes: [242, 409, 640, 882, 1083],
  },
  {
    musicID: 172,
    groupID: 4,
    title: "雨とペトラ",
    jacketUrl: "/jacket/jacket_0172.png",
    level: [9, 12, 18, 25, 29],
    notes: [260, 489, 733, 976, 1206],
  },
  {
    musicID: 182,
    groupID: 4,
    title: "PaⅢ.SENSATION",
    jacketUrl: "/jacket/jacket_0182.png",
    level: [8, 12, 17, 24, 29],
    notes: [323, 394, 758, 1032, 1244],
  },
  {
    musicID: 214,
    groupID: 4,
    title: "YY",
    jacketUrl: "/jacket/jacket_0214.png",
    level: [7, 12, 17, 25, 29],
    notes: [197, 349, 792, 976, 1175],
  },
  {
    musicID: 94,
    groupID: 7,
    title: "夜に駆ける",
    jacketUrl: "/jacket/jacket_0094.png",
    level: [6, 11, 18, 25, 29],
    notes: [182, 357, 594, 932, 1140],
  },
  {
    musicID: 24,
    groupID: 4,
    title: "Ready Steady",
    jacketUrl: "/jacket/jacket_0024.png",
    level: [5, 10, 16, 25, 29],
    notes: [96, 238, 403, 564, 667],
  },
  {
    musicID: 96,
    groupID: 4,
    title: "シネマ",
    jacketUrl: "/jacket/jacket_0096.png",
    level: [6, 12, 18, 24, 29],
    notes: [105, 254, 465, 616, 800],
  },
  {
    musicID: 163,
    groupID: 4,
    title: "Flyer!",
    jacketUrl: "/jacket/jacket_0163.png",
    level: [9, 12, 18, 24, 29],
    notes: [157, 279, 404, 659, 1083],
  },
  {
    musicID: 194,
    groupID: 4,
    title: "月光",
    jacketUrl: "/jacket/jacket_0194.png",
    level: [5, 12, 18, 25, 29],
    notes: [261, 408, 598, 861, 805],
  },
  {
    musicID: 13,
    groupID: 4,
    title: "劣等上等",
    jacketUrl: "/jacket/jacket_0013.png",
    level: [7, 12, 18, 25, 30],
    notes: [148, 371, 520, 825, 952],
  },
  {
    musicID: 37,
    groupID: 4,
    title: "夜咄ディセイブ",
    jacketUrl: "/jacket/jacket_0037.png",
    level: [8, 14, 19, 26, 30],
    notes: [184, 424, 851, 1165, 1311],
  },
  {
    musicID: 127,
    groupID: 4,
    title: "悪魔の踊り方",
    jacketUrl: "/jacket/jacket_0127.png",
    level: [5, 12, 19, 26, 30],
    notes: [147, 290, 588, 792, 938],
  },
  {
    musicID: 75,
    groupID: 4,
    title: "RAD DOGS",
    jacketUrl: "/jacket/jacket_0075.png",
    level: [6, 12, 18, 26, 30],
    notes: [204, 418, 743, 1067, 1197],
  },
  {
    musicID: 197,
    groupID: 4,
    title: "Awake Now",
    jacketUrl: "/jacket/jacket_0197.png",
    level: [6, 12, 18, 24, 30],
    notes: [204, 280, 519, 723, 884],
  },
  {
    musicID: 138,
    groupID: 4,
    title: "オルダーエゴ",
    jacketUrl: "/jacket/jacket_0138.png",
    level: [8, 12, 17, 26, 31],
    notes: [301, 545, 787, 1175, 1557],
  },
  {
    musicID: 14,
    groupID: 4,
    title: "ドクター＝ファンクビート",
    jacketUrl: "/jacket/jacket_0014.png",
    level: [8, 13, 19, 27, 32],
    notes: [160, 436, 677, 984, 1198],
  },
  {
    musicID: 114,
    groupID: 4,
    title: "チルドレンレコード",
    jacketUrl: "/jacket/jacket_0114.png",
    level: [9, 14, 19, 27, 32],
    notes: [250, 564, 823, 1234, 1502],
  },
  {
    musicID: 999,
    groupID: 4,
    title: "みっくみくにしてあげる♪【してやんよ】",
    jacketUrl: "/jacket/jacket_0114.png",
    level: [9, 14, 19, 27, 32],
    notes: [250, 564, 823, 1234, 1502],
  },
];

// testdata
const grouptest: Group[] = [
  {
    groupID: 1,
    groupName: "VIRTUAL SINGER",
    logoUrl: "hoge.png",
  },
  {
    groupID: 2,
    groupName: "Leo/need",
    logoUrl: "hoge.png",
  },
  {
    groupID: 3,
    groupName: "MORE MORE JUMP!",
    logoUrl: "hoge.png",
  },
  {
    groupID: 4,
    groupName: "Vivid BAD SQUAD",
    logoUrl: "hoge.png",
  },
  {
    groupID: 5,
    groupName: "ワンダーランズ×ショータイム",
    logoUrl: "hoge.png",
  },
  {
    groupID: 6,
    groupName: "25時、ナイトコードで。",
    logoUrl: "hoge.png",
  },
  {
    groupID: 7,
    groupName: "その他",
    logoUrl: "hoge.png",
  },
  {
    groupID: 8,
    groupName: "特殊カテゴリ",
    logoUrl: "hoge.png",
  },
];
