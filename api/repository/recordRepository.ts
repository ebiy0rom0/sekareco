/// <reference types="./../../types/index.d.ts" />
import { ClearStatusValues } from "./../../hooks/useRecord.ts"
import { apiHandler } from "../handler/apiHandler.ts"

export const recordRepository = {
  getMyRecord: async (personId: number) => {
    const json = await apiHandler.get(`record/${personId}/`)
      .json<P_Record.Record<ClearStatusValues>>()
      .catch<P_Record.Record<ClearStatusValues>>(e => {
        // TODO: display common error view
        console.log(e)
        return {}
      })

    return json
  },

  registRecord: async (personId: number, musicId: number, record: number[]) => {
    const json = await apiHandler.post(`record/${personId}/${musicId}/`, {
      json: {
        record: record[0]
      }
    }).json<ClearStatusValues[]>()

    return json
  }
}