/// <reference types="~/types/index.d.ts" />
import { useCallback, useEffect, useState } from "react";
import { ClearStatus, clearStatus, Difficulty, difficulty } from "~/types/index.ts";
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

  // initial Record value
  // Used when not set or initialized.
  const initialRecord: P_Record.Record<ClearStatus> = {
    status: new Array(Object.keys(difficulty).length).fill(clearStatus.NOPLAY),
    score: new Array(Object.keys(difficulty).length).fill(0),
  }

  // getter that retrieves the record with the specified musicID.
  const getRecord = useCallback(
    (musicId: number) => recordList[musicId] ?? initialRecord,
    [recordList],
  );

  // Drum roll operation.
  const length = Object.keys(clearStatus).length;
  const next = (status: ClearStatus) => (length + getIndex(status) + 1) % length as ClearStatus;
  const prev = (status: ClearStatus) => (length + getIndex(status) - 1) % length as ClearStatus;

  // Drum roll type addition of clear status.
  const rollNext = useCallback((musicID: number, target: Difficulty) => {
    const copyList = { ...recordList };
    if (copyList[musicID] === undefined) {
      copyList[musicID] = initialRecord;
    }

    copyList[musicID].status[target] = next(copyList[musicID].status[target]);
    setRecordList(copyList);
  }, [recordList]);

  // Drum roll type subtraction of clear status.
  const rollPrev = useCallback((musicID: number, target: Difficulty) => {
    const copyList = { ...recordList };
    if (copyList[musicID] === undefined) copyList[musicID] = initialRecord;

    copyList[musicID].status[target] = prev(copyList[musicID].status[target]);
    setRecordList(copyList);
  }, [recordList]);

  const getIndex = (status: ClearStatus) => {
    const keys = Object.keys(clearStatus);
    const findKey = Object.entries(clearStatus).find(([_, v]) => v === status)?.[0];
    return keys.findIndex((k) => k === findKey);
  };

  return {
    getRecord,
    rollNext,
    rollPrev,
  };
};
