/// <reference types="~/types/index.d.ts" />
import { getApiHandler } from "~/api/handler/apiHandler.ts"

export const musicRepository = {
  // when successfully get, returns music master data
  getMusicList: async () => {
    const json = await getApiHandler()
        .get("musics")
        .json<M_Music.Music[]>()
        .catch<M_Music.Music[]>(_ => [])

    return json
  }
}