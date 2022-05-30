import { DifficultyValues } from "./../hooks/useMusic.tsx"
import { ClearStatusList, ClearStatusValues } from "../hooks/useRecord.tsx"
import { Clear } from "./clear.tsx"
import { Difficulty } from "./difficulty.tsx"
import { Music } from "./music.tsx"

export const MyRecord = (props: Props) => (
  <table className="music table-fixed">
    <tr className="bg-slate-700/80 border-slate-500 hover:bg-slate-600/80">
      <td className="music__master w-32 border-b">
        <Music title={ props.title } url={ props.url } />
      </td>
      <td className="music__record w-auto border-b">
        <div className="difficulty grid grid-cols-5 gap-x-5">
          { Object.values(props.filter).map(v => (
            <Difficulty
              key={ v.toString() }
              difficulty={ v }
              level={ props.level[v] }
            />
          )) }
        </div>
        <div className="record grid grid-cols-5 gap-x-5 mt-2 justify-items-center">
          { Object.values(props.filter).map(v => (
            <Clear
              key={ v.toString() }
              status={ props.result[v] ?? ClearStatusList.NOPLAY }
            />
          )) }
        </div>
      </td>
    </tr>
  </table>
)

  type Props = {
    title: string
    url: string
    result: ClearStatusValues[]
    filter: DifficultyValues[]
    level: number[]
  }
