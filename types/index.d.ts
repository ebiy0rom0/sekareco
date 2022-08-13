// named rule:
//   master_data -> namespace add prefix "M_"
//   person_data -> namespace add prefix "P_"

declare namespace M_Music {
  type Music = {
    musicID: number
    artistID: number
    musicName: string
    jacketUrl: string
    level: number[]
  }
}

declare namespace P_Record {
  type Record<T> = {
    [n: number]: T[]
  }
}
