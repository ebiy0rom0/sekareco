/// <reference types="./../../types/index.d.ts" />
import { authedHandler } from "../handler/apiHandler.ts"

export const musicRepository = {
  getMusicList: async () => {
    if (authedHandler === undefined) return

    const json = await authedHandler.get("music/")
      .json<M_Music.Music[]>()
      .catch<M_Music.Music[]>(e => {
        console.log("failed to get music master: " + e)
        return []
      })

    return json
  }
}