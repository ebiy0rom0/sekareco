
export const Selectbox = (props: Props) => (
  <label>
    { props.children }
    <select
      name={ props.group }
      value={ props.value }
      onChange={ e => props.setter(e.target.value) }
    >
      { Object.entries(props.options).map(([k, v]) =>
          (<option
            key={ k.toString() }
            value={ v }
          >
            { k }
          </option>)
        ) }
    </select>
  </label>
)

type Props = JSX.IntrinsicElements["input"] & {
  children: string | number
  group: string
  options: {[s: string] : string | number}
  setter: (input: string) => void
}
