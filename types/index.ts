
export type StatusKeys = Keys<typeof STATUS>;
export type StatusValues = Values<typeof STATUS>;
export const STATUS = {
  NOPLAY: 0,
  CLEAR: 1,
  FULL_COMBO: 2,
  ALL_PERFECT: 3,
} as const;

export type DifficultyKeys = Keys<typeof DIFFICULTY>;
export type DifficultyValues = Values<typeof DIFFICULTY>;
export const DIFFICULTY = {
  EASY: 0,
  NORMAL: 1,
  HARD: 2,
  EXPERT: 3,
  MASTER: 4,
} as const;

// initial Record value
// Used when not set or initialized.
export const initialRecord: MyRecord<StatusValues> = {
  status: new Array(Object.keys(DIFFICULTY).length).fill(STATUS.NOPLAY),
  score: new Array(Object.keys(DIFFICULTY).length).fill(0),
}
