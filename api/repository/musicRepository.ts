/// <reference types="./../../types/index.d.ts" />
import { apiHandler } from "../handler/apiHandler.ts"

export const musicRepository = {
  getMusicList: async () => {
    const json = await apiHandler.get("music/")
      .json<M_Music.Music[]>()
      .catch<M_Music.Music[]>(e => {
        console.log("failed to get music master: " + e)
        return []
      })

    return json
  }
}