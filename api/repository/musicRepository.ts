/// <reference types="./../../types/index.d.ts" />
import { getApiHandler } from "../handler/apiHandler.ts"

export const musicRepository = {
  getMusicList: async () => {
    const json = await getApiHandler().get("musics/")
      .json<M_Music.Music[]>()
      .catch<M_Music.Music[]>(e => {
        console.log("failed to get music master: " + e)
        return []
      })

    return json
  }
}