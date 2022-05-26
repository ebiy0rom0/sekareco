import { DifficultyList, DifficultyValues } from './../hooks/useMusic.tsx'

export const Difficulty = (props: Props) => (
  <div className={ [props?.class, ClassSet[props.difficulty]].join(' ') }>
    { drawName(props.difficulty) }{ props.level }
  </div>
)

// draw html
const drawName = (difficulty: DifficultyValues) => Object.entries(DifficultyList).filter(([_, v]) => v === difficulty)[0][0]

type Props = {
  class?: string
  difficulty: DifficultyValues
  level: number
}

const ClassSet = {
  [DifficultyList.EASY]:   'd-easy',
  [DifficultyList.NORMAL]: 'd-normal',
  [DifficultyList.HARD]:   'd-hard',
  [DifficultyList.EXPERT]: 'd-expert',
  [DifficultyList.MASTER]: 'd-master'
} as const
