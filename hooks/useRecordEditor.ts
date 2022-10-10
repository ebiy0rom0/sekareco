import React, { useReducer } from "react";
import { ClearStatus, clearStatus, initialRecord } from "~/types/index.ts";

export const useRecordEditor = (): [P_Record.Record<ClearStatus>, React.Dispatch<Actions>] => {
  const getIndex = (status: ClearStatus) => {
    const keys = Object.keys(clearStatus);
    const findKey = Object.entries(clearStatus).find(([_, v]) => v === status)?.[0];
    return keys.findIndex((k) => k === findKey);
  };

  // Drum roll operation.
  const length = Object.keys(clearStatus).length;
  const next = (status: ClearStatus) => (length + getIndex(status) + 1) % length as ClearStatus;
  const prev = (status: ClearStatus) => (length + getIndex(status) - 1) % length as ClearStatus;

  const reducer = (state: P_Record.Record<ClearStatus>, action: Actions) => {
    switch (action.type) {
      case "initialize":
        return action.payload.record
      case "increment": {
        const copy = JSON.parse(JSON.stringify(state))
        copy.status[action.payload.d] = next(copy.status[action.payload.d])
        return copy
      }
      case "decrement": {
        const copy = JSON.parse(JSON.stringify(state))
        copy.status[action.payload.d] = prev(copy.status[action.payload.d])
        return copy
      }
      case "setScore": {
        const copy = {...state}
        copy.score[action.payload.d] = action.payload.score
        return copy
      }
    }
  }

  const [ editRecord, dispatcher ] = useReducer(reducer, initialRecord)

  return [ editRecord, dispatcher ]
}

export type Actions =
  { type: "initialize", payload: { record: P_Record.Record<ClearStatus> } }
| { type: "increment",  payload: { d: number } }
| { type: "decrement",  payload: { d: number } }
| { type: "setScore",   payload: { d: number, score: number } };
