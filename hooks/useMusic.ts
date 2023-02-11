import { useEffect, useState } from "react";
import { apiFactory } from "~/api/apiFactory.ts";
import { DifficultyValues } from "~/types/index.ts";

// custom hook
export const useMusic = (): [
  Music[],
  (d: DifficultyValues) => [number, number],
] => {
  const [music, setMusic] = useState<Music[]>([]);

  useEffect(() => {
    (async () => {
      const list = await apiFactory.get("music").getMusicList();
      setMusic(list);
    })();
  }, []);

  // all music level array
  const levelRange = (difficulty: number) => music.length === 0 ? [0] : [...new Set(music.map((m) => m.level[difficulty]))]

  // exist level min & max
  const levelLower = (difficulty: number) => Math.min(...levelRange(difficulty));
  const levelUpper = (difficulty: number) => Math.max(...levelRange(difficulty));

  return [music, (d: DifficultyValues) => {
    return [
      levelLower(d),
      levelUpper(d),
    ];
  }];
};
