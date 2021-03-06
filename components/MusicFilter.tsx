import { DifficultyList } from "./../hooks/useMusic.ts"
import { Range } from "./Range.tsx"
import { Selectbox } from "./Selectbox.tsx"

export const MusicFilter = (props: Props) => {
  return (
    <div className="flex-col">
      <Selectbox
        group="range-diff"
        options={ DifficultyList }
        value={ props.target.value }
        setter={ props.target.setter }
      >
        絞り込み難易度
      </Selectbox><br />
      <Range
        min={ props.levelLower }
        max={ props.levelUpper }
        value={ props.lower.value }
        setter={ props.lower.setter }
      >
        レベル下限
      </Range>{ props.lower.value }<br />
      <Range
        min={ props.levelLower }
        max={ props.levelUpper }
        value={ props.upper.value }
        setter={ props.upper.setter }
      >
        レベル上限
      </Range>{ props.upper.value }
    </div>
  )
}

type Props = {
  levelLower: number
  levelUpper: number
  target: {
    value: number
    setter: (n: string) => void
  }
  lower: {
    value: number
    setter: (n: string) => void
  }
  upper: {
    value: number
    setter: (n: string) => void
  }
}
