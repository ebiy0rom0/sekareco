// named rule:
//   master_data -> namespace add prefix 'M_'
//   person_data -> namespace add prefix 'P_'

declare namespace M_Music {
  type Music = {
    id: number
    title: string
    url: string
    level: number[]
  }
}

declare namespace P_Record {
  type Record<T> = {
    [n: number]: T[]
  }
}
