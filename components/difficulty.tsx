
export const DifficultyList = {
  EASY:   0,
  NORMAL: 1,
  HARD:   2,
  EXPERT: 3,
  MASTER: 4
} as const

type d = typeof DifficultyList[keyof typeof DifficultyList]

const ClassSet = {
  [DifficultyList.EASY]:   'difficulty-easy',
  [DifficultyList.NORMAL]: 'difficulty-normal',
  [DifficultyList.HARD]:   'difficulty-hard',
  [DifficultyList.EXPERT]: 'difficulty-expert',
  [DifficultyList.MASTER]: 'difficulty-master'
 } as const

const NameSet = (difficulty: d) => Object.entries(DifficultyList).filter(([_, v]) => v === difficulty)[0]

type Props = {
  difficulty: d,
  level: number
}

export const Difficulty = (props: Props) => (
  <div className={ ClassSet[props.difficulty] }>
    { NameSet(props.difficulty) }:{ props.level }
  </div>
)