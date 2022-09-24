// import styles from "~/style/app.css"

export const Toggle = (props: Props) => (
  <div className={ "grid gap-x-3 w-[55px] h-[30px] rounded-full " + (props.mode ? "justify-items-start bg-gray-300" : "justify-items-end bg-gray-600") } onClick={ props.role }>
    <div
      className={ "grid place-items-center rounded-full bg-slate-700 w-[30px] scale-110 ring-1 " + (props.mode ? "bg-white toggle-on" : "bg-slate-900 toggle-off") }
    >
      <Selector style={ props.style } mode={ props.mode } />
    </div>
  </div>
)

const Default = () => (
  <></>
)

const Theme = (props: {mode: boolean}) => (
  <img
    src={ props.mode ? "/assets/m_light.svg" : "/assets/m_dark.svg" }
    height="17"
    className={ props.mode ? "" : "invert" }
  />
)

const Selector = (props: {
  style: typeof ToggleStyle[keyof typeof ToggleStyle]
  mode: boolean
}) => {
  switch (props.style) {
    case ToggleStyle.DEFAULT:
      return (<Default />)
    case ToggleStyle.THEME:
        return  (<Theme mode={ props.mode } />)
  }
}

type Props = {
  style: typeof ToggleStyle[keyof typeof ToggleStyle]
  mode: boolean
  role: () => void
}

export const ToggleStyle = {
  DEFAULT: 1,
  THEME: 2,
} as const