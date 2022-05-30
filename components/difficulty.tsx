import { DifficultyList, DifficultyValues } from "./../hooks/useMusic.tsx"

export const Difficulty = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="110" height="20" viewBox="0 0 110 20">
    <polygon points="10,10 90,10 100,20 20,20" className="stroke-2 stroke-slate-500 fill-slate-500" fillOpacity="0.9" />
    <polygon points="0,5 70,5 80,15 10,15" className={ ["stroke-1 stroke-slate-400", colorSet[props.difficulty]].join(" ") } fillOpacity="0.9" />
    <text x="10" y="10" fontSize="smaller" className="stroke-1 stroke-slate-100">
      { drawName(props.difficulty) }
    </text>
    <text x={ props.level < 10 ? "85" : "80" } y="10" fontSize="smaller" className="stroke-1 stroke-sky-400">
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
  [DifficultyList.EASY]:   "fill-green-400",
  [DifficultyList.NORMAL]: "fill-cyan-500",
  [DifficultyList.HARD]:   "fill-yellow-500",
  [DifficultyList.EXPERT]: "fill-red-600",
  [DifficultyList.MASTER]: "fill-purple-500"
} as const
