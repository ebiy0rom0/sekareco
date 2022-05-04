
type Props = JSX.IntrinsicElements['input'] & { children: string }

export const Range = (props: Props) => {
  const { children, ...inputProps } = props
  return (
    <label className='range-wrap'>
      { children }
      <input
        type='range'
        list='marks'
        { ...inputProps }
      />
      <datalist id='marks'>
        { [...Array(inputProps?.max).keys()].map(n => <option key={ n.toString() } value={ n } />) }
      </datalist>
    </label>
  )
}