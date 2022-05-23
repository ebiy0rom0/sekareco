import React from 'react'
import { DifficultyList } from './../hooks/useMusic.tsx'

type Props = JSX.IntrinsicElements['input'] & {
  children: string | number
  group: string
  options: {[s: string] : string | number}
  setter: (d: typeof DifficultyList[keyof typeof DifficultyList]) => void
}

export const Selectbox = (props: Props) => (
  <label>
    { props.children }
    <select
      name={ props.group }
      value={ props.value }
      onChange={ e => props.setter((e.target as HTMLSelectElement).value) }
    >
      { Object.entries(props.options).map(([k, v]) =>
          (<option
            key={ k.toString() }
            value={ v }
            selected={ props.value == v }
          >
            { k }
          </option>)
        ) }
    </select>
  </label>
)