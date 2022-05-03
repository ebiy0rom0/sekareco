
type Props = JSX.IntrinsicElements['input'] & { children: string }

export const Range = (props: Props) => {
  const { children, ...inputProps } = props
  return (
    <label>
      { children }
      <input
        type="range"
        list="marks"
        { ...inputProps }
      />
      <datalist id="marks">
        { [...Array(props?.max ?? 0).keys()].map(n => <option key={ n.toString() } value={ n } />) }
      </datalist>
    </label>
  )
}