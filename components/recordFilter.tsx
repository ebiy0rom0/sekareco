import { DifficultyList } from './../hooks/useMusic.tsx'
import { Checkbox } from './checkbox.tsx'

export const RecordFilter = (props: Props) => {
  return (
    <label>
      難易度
      { Object.entries(DifficultyList).map(([k, v]) =>
        <Checkbox
          key={ k.toString() }
          group='difficulty'
          value={ v }
          setter={ props.setter }
          isChecked={ props.isChecked(v) }
        >
          { k }
        </Checkbox>
      )}
    </label>
  )
}

type Props = {
  setter: (n: string) => void
  isChecked: (n: number) => boolean
}
