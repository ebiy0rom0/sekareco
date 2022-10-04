/// <reference types="~/types/index.d.ts" />
import { useEffect, useState } from "react";
import { Difficulty, difficulty } from "~/types/index.ts";
import { useRange } from "~/hooks/useRange.ts";

export const useMusicFilter = (
  music: M_Music.Music[],
  levelLower: (n: Difficulty) => number,
  levelUpper: (n: Difficulty) => number,
) => {
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty>(
    difficulty.MASTER,
  );
  const {
    range: lowerFilter,
    changeRange: changeLower,
  } = useRange(0);
  const {
    range: upperFilter,
    changeRange: changeUpper,
  } = useRange(0);

  // setter wrap
  const changeDifficulty = (input: string) => {
    const inputNum = parseInt(input);
    // select "master", if out of range
    const newVal = Object.values(difficulty).some((d) => d === inputNum)
      ? (inputNum as Difficulty)
      : difficulty.MASTER;
    setFilterDifficulty(newVal);
  };
  const changeLowerFilter = (val: string) =>
    changeLower(parseInt(val), levelLower(filterDifficulty), upperFilter());
  const changeUpperFilter = (val: string) =>
    changeUpper(parseInt(val), lowerFilter(), levelUpper(filterDifficulty));

  // check within filter range
  const isLevelWithinRange = (level: number) => lowerFilter() <= level && level <= upperFilter();

  // level filter
  const getFilteredMusic = () => music.filter((m) => isLevelWithinRange(m.level[filterDifficulty]));

  useEffect(() => {
    changeLower(
      levelLower(filterDifficulty),
      levelLower(filterDifficulty),
      levelUpper(filterDifficulty),
    );
    changeUpper(
      levelUpper(filterDifficulty),
      levelLower(filterDifficulty),
      levelUpper(filterDifficulty),
    );
  }, [music, filterDifficulty]);

  return {
    filterDifficulty: () => filterDifficulty,
    lowerFilter,
    upperFilter,
    changeDifficulty,
    changeUpperFilter,
    changeLowerFilter,
    getFilteredMusic,
  };
};
