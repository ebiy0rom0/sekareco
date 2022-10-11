/// <reference types="~/types/index.d.ts" />
import { initialRecord } from "~/types/index.ts";
import { useCallback, useEffect, useState } from "react";
import { ClearStatus } from "~/types/index.ts";
import { apiFactory } from "~/api/apiFactory.ts";

// custom hook
export const useRecord = (personId: number) => {
  const [recordList, setRecordList] = useState<P_Record.Records<ClearStatus>>(
    {},
  );

  useEffect(() => {
    (async () => {
      const list = await apiFactory.get("record").getMyRecord(personId);
      setRecordList(list);
    })();
  }, []);

  // getter that retrieves the record with the specified musicID.
  const getRecord = useCallback(
    (musicId: number) => recordList[musicId] ?? initialRecord,
    [recordList],
  );

  const setRecord = (musicID: number, record: P_Record.Record<ClearStatus>) => {
    const copy = JSON.parse(JSON.stringify(recordList)) as typeof recordList
    copy[musicID] = record
    setRecordList(copy)
  }

  return {
    getRecord,
    setRecord,
  };
};
