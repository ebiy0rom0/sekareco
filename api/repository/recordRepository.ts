/// <reference types="./../../types/index.d.ts" />
import { ClearStatusList, ClearStatusValues } from "../../hooks/useRecord.ts"
import { apiHandler } from "../handler/apiHandler.ts"

export const recordRepository = {
  getMyRecord: async (personId: number) => {
    // const json = await apiHandler.get(`record/${personId}/`).json<string>()
    // return JSON.parse(json) as P_Record.Record<ClearStatusValues>

    // @debug data
    return {
       1: [a,a,f,f,f],
       2: [n,n,f,a,f],
       3: [a,a,f,f,f],
       4: [a,a,f,f,f],
       5: [a,a,a,a,a],
       6: [a,a,f,f,f],
       7: [n,a,a,f,f],
       8: [a,a,a,a,a],
       9: [a,a,a,f,f],
      10: [a,a,f,f,f],
      11: [n,n,f,a,f],
      12: [n,a,f,f,f],
      13: [a,a,a,a,f],
      14: [a,a,a,a,f],
      15: [a,a,a,a,f],
      16: [a,a,f,f,f],
      17: [a,a,f,f,f],
      18: [a,a,a,a,f],
      19: [a,a,f,f,c],
      20: [n,a,n,f,f],
      21: [a,a,f,f,f],
      22: [a,a,f,f,f],
      23: [a,a,a,a,f],
      24: [a,a,a,a,c],
      25: [a,a,f,f,c],
      26: [n,a,f,f,c],
      27: [a,a,a,f,c],
      28: [a,a,f,f,c],
    }
  },
  registRecord: async (personId: number, musicId: number, record: number[]) => {
    const json = await apiHandler.post(`record/${personId}/${musicId}/`, {
      json: {
        record: record[0]
      }
    }).json<string>()

    return json
  }
}

// @debug
const [n, c, f, a] = Object.values(ClearStatusList)
