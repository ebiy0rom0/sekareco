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
  [DifficultyList.EASY]:   'difficulty__easy',
  [DifficultyList.NORMAL]: 'difficulty__normal',
  [DifficultyList.HARD]:   'difficulty__hard',
  [DifficultyList.EXPERT]: 'difficulty__expert',
  [DifficultyList.MASTER]: 'difficulty__master'
} as const
