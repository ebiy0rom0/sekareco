import React, { useCallback, useEffect, useReducer } from "react";
import { DIFFICULTY, DifficultyValues } from "~/types/index.ts";

export const useMusicFilter = (
  music: Music[],
  levelRange: (n: DifficultyValues) => { lower: number; upper: number },
  _artists: Artists,
): [
  MusicFilterState,
  React.Dispatch<MusicFilterActions>,
  Music[],
] => {
  const changeLevel = (val: number, lower: number, upper: number) =>
    val < lower ? lower : val > upper ? upper : val;

  // select "master", if out of range
  const changeDifficulty = (input: number) =>
    Object.values(DIFFICULTY).some((d) => d === input)
      ? (input as DifficultyValues)
      : DIFFICULTY.MASTER;

  const reducer = (state: MusicFilterState, action: MusicFilterActions): MusicFilterState => {
    const copy = JSON.parse(JSON.stringify(state)) as typeof state;
    switch (action.type) {
      case "changeDifficulty":
        copy.difficulty = changeDifficulty(action.payload.d);
        break;
      case "changeLower":
        copy.levelLower = changeLevel(
          action.payload.l,
          levelRange(state.difficulty).lower,
          state.levelUpper,
        );
        break;
      case "changeUpper":
        copy.levelUpper = changeLevel(
          action.payload.u,
          state.levelLower,
          levelRange(state.difficulty).upper,
        );
        break;
    }
    return copy;
  };

  const [filter, dispatcher] = useReducer(reducer, {
    difficulty: DIFFICULTY.MASTER,
    levelLower: 0,
    levelUpper: 100,
    artistIDs: [],
  });

  useEffect(() => {
    dispatcher({
      type: "changeUpper",
      payload: {
        u: levelRange(filter.difficulty).upper,
      },
    });
    dispatcher({
      type: "changeLower",
      payload: {
        l: levelRange(filter.difficulty).lower,
      },
    });
  }, [music, filter.difficulty]);

  // check within filter range
  const isLevelWithinRange = useCallback(
    (level: number) => filter.levelLower <= level && level <= filter.levelUpper,
    [filter.levelLower, filter.levelUpper],
  );

  // level filter
  const filteredMusic = useCallback(
    () => music.filter((m) => isLevelWithinRange(m.level[filter.difficulty])),
    [music, filter],
  );

  return [filter, dispatcher, filteredMusic()];
};

export type MusicFilterState = {
  difficulty: DifficultyValues;
  levelUpper: number;
  levelLower: number;
  artistIDs: Values<Artists>[];
};

export type MusicFilterActions =
  | { type: "changeDifficulty"; payload: { d: number } }
  | { type: "changeLower"; payload: { l: number } }
  | { type: "changeUpper"; payload: { u: number } };
