import { apiHandler } from '../handler/apiHandler.ts'

export const recordRepository = {
  getMyRecord: async (personId: number) => {
    const json = await apiHandler.get(`record/${personId}/`).json()
    console.log(json)
  },
  registRecord: async (personId: number, musicId: number, record: number[]) => {
    const json = await apiHandler.post(`record/${personId}/${musicId}/`, {
      json: {
        record: record[0]
      }
    }).json()
    console.log(json)
  }
}