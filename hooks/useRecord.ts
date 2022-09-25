/// <reference types="./../types/index.d.ts" />
import { useCallback, useEffect, useState } from "react";
import {
  ClearStatus,
  clearStatus,
  Difficulty,
  difficulty,
} from "../types/index.ts";
import { apiFactory } from "../api/apiFactory.ts";
import { useObjectCompare } from "../utils/useObjectCompare.ts";
import { useDelayCallback } from "~/utils/useDelayCallback.ts";

// custom hook
export const useRecord = (personId: number) => {
  const [recordList, setRecordList] = useState<P_Record.Record<ClearStatus>>(
    {},
  );
  const [compareList, setCompareList] = useState<typeof recordList>({});
  const { difference } = useObjectCompare(recordList, compareList);

  const changeCompareList = (musicId: number, status: ClearStatus[]) => {
    const copyList = { ...compareList };
    copyList[musicId] = status;
    setCompareList(copyList);
  };

  // auto saving 30 sec after at first record update
  const autoSaving = async () => {
    await apiFactory.get("record").registRecord(personId, 1, []);
    changeCompareList(1, []);
  };
  const { start, stop } = useDelayCallback(
    DELAY_AUTO_SAVE,
    async () => await autoSaving(),
  );

  // [first time]
  useEffect(() => {
    // transaction data fetch only client side
    if (typeof window === "undefined") return;

    (async () => {
      const list = await apiFactory.get("record").getMyRecord(personId);
      if (typeof list === "undefined") return;

      setRecordList(list);
      setCompareList(list);
    })();
  }, []);

  // auto saving
  useEffect(() => difference() ? start() : stop(), [difference]);

  // select one music record
  const getMusicRecord = useCallback(
    (musicId: number) => recordList[musicId] ?? [],
    [recordList],
  );

  //
  const increment = (musicId: number, diff: Difficulty) => {
    const copyList = { ...recordList };
    if (copyList[musicId] === undefined) {
      copyList[musicId] = Array(Object.keys(difficulty).length).fill(
        clearStatus.NOPLAY,
      );
    }
    copyList[musicId][diff] = next(copyList[musicId][diff]) as ClearStatus;
    setRecordList(copyList);
  };
  const decrement = (musicId: number, diff: Difficulty) => {
    const copyList = { ...recordList };
    if (copyList[musicId] === undefined) {
      copyList[musicId] = new Array(Object.keys(difficulty).length).fill(
        clearStatus.NOPLAY,
      );
    }
    copyList[musicId][diff] = prev(copyList[musicId][diff]) as ClearStatus;
    setRecordList(copyList);
  };

  const getIndex = (status: number) => {
    const keyList = Object.keys(clearStatus);
    const findKey = Object.entries(clearStatus).find(([_, v]) => v === status)
      ?.[0];
    return keyList.findIndex((k) => k === findKey);
  };
  const length = Object.keys(clearStatus).length;
  const next = (status: number) =>
    (length + getIndex(status) + 1) % length as ClearStatus;
  const prev = (status: number) =>
    (length + getIndex(status) - 1) % length as ClearStatus;

  return {
    getMusicRecord,
    increment,
    decrement,
  };
};

const DELAY_AUTO_SAVE = 10 * 1000;
