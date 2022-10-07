/// <reference types="~/types/index.d.ts" />
import { useEffect, useState, useCallback } from "react";
import { apiFactory } from "~/api/apiFactory.ts";

// custom hook
export const useMusic = () => {
  const [music, setMusic] = useState<M_Music.Music[]>([]);

  useEffect(() => {
    (async () => {
      const list = await apiFactory.get("music").getMusicList();
      setMusic(list);
    })();
  }, []);

  // all music level array
  const getLevelListByDifficulty = useCallback((difficulty: number) => [...music.map((m) => m.level[difficulty])], [music]);

  // exist level min & max
  const getLevelUpper = (difficulty: number) => Math.max(0, ...getLevelListByDifficulty(difficulty));
  const getLevelLower = (difficulty: number) => Math.min(100, ...getLevelListByDifficulty(difficulty));

  return {
    levelUpper: getLevelUpper,
    levelLower: getLevelLower,
    music: () => music,
  };
};
