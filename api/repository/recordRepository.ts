/// <reference types="~/types/index.d.ts" />
import { ClearStatus } from "~/types/index.ts"
import { getApiHandler } from "~/api/handler/apiHandler.ts"

export const recordRepository = {
  // when successfully get, returns score and clear status by parameter person's
  getMyRecord: async (personId: number) => {
    const json = await getApiHandler()
        .get(`records/${personId}`)
        .json<P_Record.Record<ClearStatus>>()
        .catch<P_Record.Record<ClearStatus>>(_ => ({}))

    return json ?? {}
  },

  // when successfully regist, returns status 201 and not returns response body
  registRecord: async (personId: number, musicId: number, record: number[]) => {
    await getApiHandler()
        .post(`records/${personId}/${musicId}`, {
          json: {
            record: record[0]
          }
        })
        .json()
        .catch()
  }
}
