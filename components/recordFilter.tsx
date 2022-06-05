import { DifficultyList } from "./../hooks/useMusic.ts"
import { Checkbox } from "./checkbox.tsx"

export const RecordFilter = (props: Props) => {
  return (
    <>
      難易度
      { Object.entries(DifficultyList).map(([k, v]) =>
        <Checkbox
          key={ k.toString() }
          group="difficulty"
          value={ v }
          setter={ props.setter }
          isChecked={ props.isChecked(v) }
        >
          { k }
        </Checkbox>
      )}
    </>
  )
}

type Props = {
  setter: (n: string) => void
  isChecked: (n: number) => boolean
}
