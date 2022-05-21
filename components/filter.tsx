import React from 'react'
import { useState } from 'react'
import { Range } from './range.tsx'
import { Checkbox } from './checkbox.tsx'
import { DifficultyList } from './../hooks/useMusic.tsx'

export const Filter = (props: Props) => {
  const [ range, setRange ] = useState(0)
  return (
    <div>
      <Range
        min={ props.levelLower }
        max={ props.levelUpper }
        value={ range }
        onChange={ e => setRange(parseInt(e.target.value)) }
      >
        レベル
      </Range><br />
      <label>
        難易度
        { Object.entries(DifficultyList).map(([k, v]) =>
          <Checkbox
            key={ k.toString() }
            group='difficulty'
            value={ v }
          >
            { k }
          </Checkbox>
        )}
      </label>
    </div>
  )
}

type Props = {
  levelLower: number
  levelUpper: number
}