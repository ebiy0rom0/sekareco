import { Music } from "./music.tsx"
import { Difficulty, DifficultyList } from "./difficulty.tsx"
import { Clear } from "./clear.tsx"


export const MyRecord = () => {
  const clear      = Object.values(DifficultyList).map(v => <Clear key={v.toString()} />)
  const difficulty = Object.values(DifficultyList).map(v => <Difficulty key={v.toString()} difficulty={v} level={1} />)

  return (
    <div className="my-record-wrapper">
      <Music />
      { difficulty }
      { clear }
    </div>
  )
}