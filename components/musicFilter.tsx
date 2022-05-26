import { DifficultyList } from './../hooks/useMusic.tsx'
import { Range } from './range.tsx'
import { Selectbox } from './selectbox.tsx'

export const MusicFilter = (props: Props) => {
  return (
    <>
      <Selectbox
        group='range-diff'
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
    </>
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
