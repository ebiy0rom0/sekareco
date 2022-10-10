import { useState } from "react";
import { Difficulty } from "../types/index.ts";

export const useMusicSort = (music: M_Music.Music[]) => {
  const [ asc, setAsc ] = useState(true)

  const sort = (d: Difficulty) => music.sort((a, b) => asc ? a.level[d] - b.level[d] : b.level[d] - a.level[d])
  return {
    toggleOrder: () => setAsc(!asc),
    sortedMusic: sort
  }
}