import { DifficultyList, DifficultyValues } from './../hooks/useMusic.tsx'

export const Difficulty = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 100 20">
    <polygon points="10,10 90,10 100,20 20,20" className="stroke-2 stroke-slate-500 fill-slate-500" fillOpacity="0.9" />
    <polygon points="0,5 70,5 80,15 10,15" className={ ["stroke-1 stroke-slate-400", colorSet[props.difficulty]].join(' ') } fillOpacity="0.9" />
    <text x="15" y="10" className="stroke-1 stroke-slate-700">
      { drawName(props.difficulty) }
    </text>
    <text x="75" y="10" className="stroke-1 stroke-sky-500">
      { props.level }
    </text>
  </svg>
)

// draw html
const drawName = (difficulty: DifficultyValues) => Object.entries(DifficultyList).filter(([_, v]) => v === difficulty)[0][0]

type Props = {
  class?: string
  difficulty: DifficultyValues
  level: number
}

const colorSet = {
  [DifficultyList.EASY]:   'fill-green-300',
  [DifficultyList.NORMAL]: 'fill-cyan-400',
  [DifficultyList.HARD]:   'fill-yellow-400',
  [DifficultyList.EXPERT]: 'fill-red-600',
  [DifficultyList.MASTER]: 'fill-purple-500'
} as const
