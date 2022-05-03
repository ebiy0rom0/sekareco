
export const DifficultyList = {
  EASY:   0,
  NORMAL: 1,
  HARD:   2,
  EXPERT: 3,
  MASTER: 4
} as const

type T = typeof DifficultyList[keyof typeof DifficultyList]

const ClassSet = {
  [DifficultyList.EASY]:   'd-easy',
  [DifficultyList.NORMAL]: 'd-normal',
  [DifficultyList.HARD]:   'd-hard',
  [DifficultyList.EXPERT]: 'd-expert',
  [DifficultyList.MASTER]: 'd-master'
 } as const

const drawName = (difficulty: T) => Object.entries(DifficultyList).filter(([_, v]) => v === difficulty)[0][0]

type Props = {
  class?: string
  difficulty: T
  level: number
}

export const Difficulty = (props: Props) => (
  <div className={ [props?.class, ClassSet[props.difficulty]].join(' ') }>
    { drawName(props.difficulty) }{ props.level }
  </div>
)