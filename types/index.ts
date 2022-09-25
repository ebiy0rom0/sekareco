export const clearStatus = {
  NOPLAY: 0,
  CLEAR: 1,
  FULL_COMBO: 2,
  ALL_PERFECT: 3,
} as const;

export type ClearStatus = typeof clearStatus[keyof typeof clearStatus];

export const difficulty = {
  EASY: 0,
  NORMAL: 1,
  HARD: 2,
  EXPERT: 3,
  MASTER: 4,
} as const;

export type Difficulty = typeof difficulty[keyof typeof difficulty];
