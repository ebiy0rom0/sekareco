
type Props = JSX.IntrinsicElements['input']

export const Range = (props: Props) => (
  <div>
    <input
      type="range"
      list="marks"
      { ...props }
    />
    <datalist id="marks">
      { [...Array(props?.max ?? 100).keys()].map(n => <option key={ n.toString() } value={ n } />) }
    </datalist>
  </div>
)