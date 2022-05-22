import { apiHandler } from '../handler/apiHandler.ts'

export const musicRepository = {
  getMusicList: async () => {
    const json = await apiHandler.get('music/').json()
    console.log(json)
  }
}