import { useState } from "react";
import { DifficultyValues } from "~/types/index.ts";

export const useMusicSort = (music: Music[]) => {
  const [asc, setAsc] = useState(true);

  const sort = (d: DifficultyValues) =>
    music.sort((a, b) => asc ? a.level[d] - b.level[d] : b.level[d] - a.level[d]);
  return {
    toggleOrder: () => setAsc(!asc),
    sortedMusic: sort,
  };
};
