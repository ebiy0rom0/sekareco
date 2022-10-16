import React, { useReducer } from "react";
import { initialRecord, STATUS, StatusValues } from "~/types/index.ts";

export const useRecordEditor = (): [MyRecord<StatusValues>, React.Dispatch<EditActions>] => {
  const getIndex = (status: StatusValues) => {
    const keys = Object.keys(STATUS);
    const findKey = Object.entries(STATUS).find(([_, v]) => v === status)?.[0];
    return keys.findIndex((k) => k === findKey);
  };

  // Drum roll operation.
  const length = Object.keys(STATUS).length;
  const next = (status: StatusValues) => (length + getIndex(status) + 1) % length as StatusValues;
  const prev = (status: StatusValues) => (length + getIndex(status) - 1) % length as StatusValues;

  const reducer = (state: MyRecord<StatusValues>, action: EditActions): MyRecord<StatusValues> => {
    const copy = JSON.parse(JSON.stringify(state)) as typeof state;
    switch (action.type) {
      case "initialize":
        return action.payload.record;
      case "increment":
        copy.status[action.payload.d] = next(copy.status[action.payload.d]);
        break;
      case "decrement":
        copy.status[action.payload.d] = prev(copy.status[action.payload.d]);
        break;
      case "setScore":
        copy.score[action.payload.d] = action.payload.score;
        break;
    }
    return copy;
  };

  const [editRecord, dispatcher] = useReducer(reducer, initialRecord);

  return [editRecord, dispatcher];
};

export type EditActions =
  | { type: "initialize"; payload: { record: MyRecord<StatusValues> } }
  | { type: "increment"; payload: { d: number } }
  | { type: "decrement"; payload: { d: number } }
  | { type: "setScore"; payload: { d: number; score: number } };
