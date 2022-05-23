import React from 'react'
import { Range } from './range.tsx'
import { Selectbox } from './selectbox.tsx'
import { DifficultyList } from './../hooks/useMusic.tsx'

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
        onChange={ e => props.lower.setter(parseInt((e.target as HTMLInputElement).value)) }
      >
        レベル下限
      </Range>{ props.lower.value }<br />
      <Range
        min={ props.levelLower }
        max={ props.levelUpper }
        value={ props.upper.value }
        onChange={ e => props.upper.setter(parseInt((e.target as HTMLInputElement).value)) }
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
    setter: (n: number) => void
  }
  lower: {
    value: number
    setter: (n: number) => void
  }
  upper: {
    value: number
    setter: (n: number) => void
  }
}