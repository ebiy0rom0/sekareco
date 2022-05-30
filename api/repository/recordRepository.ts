import { apiHandler } from "../handler/apiHandler.ts"

export const recordRepository = {
  getMyRecord: async (personId: number) => {
    const json = await apiHandler.get(`record/${personId}/`).json<string>()
    console.log(json)

    return json
  },
  registRecord: async (personId: number, musicId: number, record: number[]) => {
    const json = await apiHandler.post(`record/${personId}/${musicId}/`, {
      json: {
        record: record[0]
      }
    }).json<string>()
    console.log(json)

    return json
  }
}