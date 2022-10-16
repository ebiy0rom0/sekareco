import { useCallback, useEffect, useState } from "react";
import { apiFactory } from "~/api/apiFactory.ts";
import { DifficultyValues } from "~/types/index.ts";

// custom hook
export const useMusic = (): [
  Music[],
  (d: DifficultyValues) => {
    lower: number;
    upper: number;
  },
] => {
  const [music, setMusic] = useState<Music[]>([]);

  useEffect(() => {
    (async () => {
      const list = await apiFactory.get("music").getMusicList();
      setMusic(list);
    })();
  }, []);

  // all music level array
  const getLevelListByDifficulty = useCallback(
    (difficulty: number) => [...music.map((m) => m.level[difficulty])],
    [music],
  );

  // exist level min & max
  const getLevelUpper = (difficulty: number) =>
    Math.max(0, ...getLevelListByDifficulty(difficulty));
  const getLevelLower = (difficulty: number) =>
    Math.min(100, ...getLevelListByDifficulty(difficulty));

  return [music, (d: DifficultyValues) => {
    return {
      lower: getLevelLower(d),
      upper: getLevelUpper(d),
    };
  }];
};
