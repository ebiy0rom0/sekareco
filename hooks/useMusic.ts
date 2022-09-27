/// <reference types="~/types/index.d.ts" />
import { useEffect, useState } from "react";
import { apiFactory } from "~/api/apiFactory.ts";

// custom hook
export const useMusic = () => {
  const [music, setMusic] = useState<M_Music.Music[]>([]);

  useEffect(() => {
    // master data fetch only server musicID
    if (typeof window === "undefined") return

    (async () => {
      const list = await apiFactory.get("music").getMusicList()
      setMusic(list)
    })()
  }, []);

  // all music level array
  const getLevelListByDifficulty = (
    difficulty: number,
  ) => [...music.map((m) => m.level[difficulty])];

  // exist level min & max
  const getLevelUpper = (difficulty: number) =>
    Math.max(0, ...getLevelListByDifficulty(difficulty));
  const getLevelLower = (difficulty: number) =>
    Math.min(100, ...getLevelListByDifficulty(difficulty));

  return {
    levelUpper: getLevelUpper,
    levelLower: getLevelLower,
    music: () => music,
  };
};
