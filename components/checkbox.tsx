
export const Checkbox = (props: Props) => (
  <label>
    { props.children }
    <input
      type='checkbox'
      name={ props.group }
      value={ props.value }
      checked={ props.isChecked }
      onChange={ e => props.setter(e.target.value) }
    />
  </label>
)

type Props = JSX.IntrinsicElements['input'] & {
  children: string | number
  group: string
  isChecked: boolean
  setter: (d: string) => void
}