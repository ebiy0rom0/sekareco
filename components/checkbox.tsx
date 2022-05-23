import React from 'react'
import { DifficultyList } from './../hooks/useMusic.tsx'

type Props = JSX.IntrinsicElements['input'] & {
  children: string | number
  group: string
  isChecked: boolean
  setter: (d: typeof DifficultyList[keyof typeof DifficultyList]) => void
}

export const Checkbox = (props: Props) => (
  <label>
    { props.children }
    <input
      type='checkbox'
      name={ props.group }
      value={ props.value }
      checked={ props.isChecked }
      onChange={ e => props.setter((e.target as HTMLInputElement).value) }
    />
  </label>
)