
export const Range = (props: Props) => {
  const { children, setter, ...inputProps } = props
  return (
    <label className="range-wrap">
      { children }
      <input
        type="range"
        list="marks"
        onChange={ e => setter(e.target.value) }
        { ...inputProps }
      />
      <datalist id="marks">
        { [...Array(inputProps?.max).keys()].map(n => <option key={ n.toString() } value={ n } />) }
      </datalist>
    </label>
  )
}

type Props = JSX.IntrinsicElements["input"] & {
  children: string
  setter: (input: string) => void
}
