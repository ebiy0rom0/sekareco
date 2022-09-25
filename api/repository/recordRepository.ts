/// <reference types="~/types/index.d.ts" />
import { ClearStatus } from "~/types/index.ts";
import { getApiHandler } from "~/api/handler/apiHandler.ts";

export const recordRepository = {
  getMyRecord: async (personId: number) => {
    // when successfully get, returns score and clear status by parameter person's
    const json = await getApiHandler()
      .get(`records/${personId}`)
      .json<P_Record.Record<ClearStatus>>()
      .catch<P_Record.Record<ClearStatus>>(() => ({}));

    return json ?? {};
  },

  registRecord: async (personId: number, musicId: number, record: number[]) => {
    // when successfully regist, returns status 201 and not returns response body
    await getApiHandler()
      .post(`records/${personId}/${musicId}`, {
        json: {
          record: record[0],
        },
      })
      .json()
      .catch();
  },
};
