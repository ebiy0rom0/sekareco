
export const Toggle = (props: Props) => (
  <div className={ "grid gap-x-3 w-[40px] h-[25px] bg-red-300 rounded-full " + (props.mode ? "justify-items-start" : "justify-items-end") } onClick={ props.role }>
    <div className="rounded-full bg-slate-700 w-[25px]">
      <Styles style={ props.style } mode={ props.mode } />
    </div>
  </div>
)

const test: React.FC<Animation> = () => (
  <></>
)

const Styles = (props: {
  style: typeof ToggleStyle[keyof typeof ToggleStyle]
  mode: boolean
}) => {
  switch (props.style) {
    case ToggleStyle.STYLE_NONE:
      return (<DefaultButton mode={ props.mode } />)
    case ToggleStyle.STYLE_DP_MODE:
        return  (<DisplayModeButton mode={ props.mode } />)
  }
}

const DefaultButton = (props: {mode: boolean}) => (
  <>{ props.mode ? "true" : "false" }</>
)

const DisplayModeButton = (props: {mode: boolean}) => (
  <>
    { props.mode ? "" : "" }
  </>
)

type Props = {
  style: typeof ToggleStyle[keyof typeof ToggleStyle]
  mode: boolean
  role: () => void
}

export const ToggleStyle = {
  STYLE_NONE: 1,
  STYLE_DP_MODE: 2,
} as const