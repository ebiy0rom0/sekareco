
type Props = JSX.IntrinsicElements['input'] & {
  children: string | number
  group: string
}

export const Checkbox = (props: Props) => (
  <label>
    { props.children }
    <input
      type="checkbox"
      name={ props.group }
      value={ props.value }
    />
  </label>
)